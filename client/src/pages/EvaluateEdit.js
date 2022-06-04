import React, { Component } from "react";

import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import swal from "@sweetalert/with-react";

import "./main.css";

export default class EditEvaluate extends Component {
  constructor(props) {
    super(props);

    this.onChangeReason = this.onChangeReason.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Topic: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/get/topic/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          topic: response.data.topic,
          reason: response.data.reason,
          status: response.data.status,
          date: response.data.date,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get("http://localhost:4000/api/get/topics")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            Delivery: response.data.map((Topic) => Topic.DPname),
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeReason(e) {
    this.setState({
      reason: e.target.value,
    });
  }
  onChangeStatus(e) {
    this.setState({
      status: e.target.value,
    });
  }
  onChangeDate(e) {
    this.setState({
      date: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const Topic = {
      reason: this.state.reason,
      status: this.state.status,
      date: this.state.date,
    };
    console.log(Topic);

    axios
      .put(
        "http://localhost:4000/api/put/topic/" + this.props.match.params.id,
        Topic
      )
      .then((res) => console.log(res.data));

    swal({
      title: "Done!",
      text: "Add Successfully!",
      icon: "success",
      button: "Okay!",
    }).then((value) => {
      swal((window.location = "/evaList/"));
    });
  }

  render() {
    return (
      <div>
        <div className="row ">
          <div className="col-12">
            <div className="myformstyle">
              <div className="card-body">
                <div className="col-md-8 mt-4 mx-auto"> </div>
                <h3 className="text-center">
                  <font size="6">Edit Evaluate</font>
                </h3>{" "}
                <br></br>
                <br></br>
                <form className="col-lg-6 offset-lg-3" onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label style={{ fontWeight: "bold" }}>Topic </label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control"
                      value={this.state.topic}
                      disabled
                    />
                  </div>{" "}
                  <div className="form-group">
                    <label style={{ fontWeight: "bold" }}> Reason </label>
                    <input
                      type="text"
                      placeholder="Reason"
                      required
                      className="form-control"
                      value={this.state.reason}
                      onChange={this.onChangeReason}
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ fontWeight: "bold" }}> Status </label>
                    <br />

                    <select
                      class="form-select"
                      style={{ width: "200px", height: "40px" }}
                      onChange={this.onChangeStatus}
                      value={this.state.status}
                    >
                      <option selected>Add Status</option>
                      <option value="Poor">Poor</option>
                      <option value="Fair">Fair</option>
                      <option value="Good">Good</option>
                      <option value="Excellent ">Excellent</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label style={{ fontWeight: "bold" }}> Date </label>

                    <input
                      type="date"
                      placeholder="Date"
                      required
                      className="form-control"
                      value={this.state.date}
                      onChange={this.onChangeDate}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Edit "
                      className="btn btn-primary"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br /> <br />
      </div>
    );
  }
}
