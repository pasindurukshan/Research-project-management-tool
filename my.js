import React, { Component } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import swal from "@sweetalert/with-react";
import DatePicker from "react-datepicker";

export default class AddEvaluate extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeReason = this.onChangeReason.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);

    this.state = {
      name: "",
      reason: "",
      status: "",
      date: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/get/topics/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          name: response.data.name,
          reason: response.data.reason,
          status: response.data.status,
          date: response.data.date,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:4000/api/get/topics/")
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

  onChangeName(e) {
    this.setState({
      name: e.target.value,
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
      name: this.state.name,
      reason: this.state.reason,
      status: this.state.status,
      date: this.state.date,
    };
    console.log(Topic);

    axios
      .post(
        "http://localhost:4000/api/evt/topic/" + this.props.match.params.id,
        Topic
      )
      .then((res) => console.log(res.data));
  }

  render() {
    return (
      <div>
        <div class="row ">
          <div class="col-6">
            <br />
            <img
              src="https://thumbs.dreamstime.com/b/time-to-evaluate-blackboard-48391240.jpg"
              width="60%"
              height="40%"
            />
          </div>{" "}
          <div class="col-6">
            <div div class="myformstyle">
              <div className="card-body">
                <div className="col-md-8 mt-4 mx-auto"> </div>
                <h3 className="text-center">
                  <font face="Comic sans MS" size="6">
                    {" "}
                    Update Supplier Payment{" "}
                  </font>
                </h3>{" "}
                <br></br>
                <br></br>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label>Name </label>
                    <input
                      type="text"
                      placeholder="Name"
                      required
                      className="form-control"
                      value={this.state.name}
                      onChange={this.onChangeName}
                    />
                  </div>{" "}
                  <div className="form-group">
                    <label> Reason </label>
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
                    <label> Status </label>

                    <input
                      type="text"
                      placeholder="Status"
                      required
                      className="form-control"
                      value={this.state.status}
                      onChange={this.onChangeStatus}
                    />
                  </div>
                  <div className="form-group">
                    <label> Date </label>

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
                      value="Add "
                      className="btn btn-primary"
                    />
                  </div>{" "}
                </form>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <br /> <br />{" "}
      </div>
    );
  }
}
