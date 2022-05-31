import React, { Component } from "react";

import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import swal from "@sweetalert/with-react";
import DatePicker from "react-datepicker";

const Test = (props) => (
  <tr>
    <td> {props.Test.name} </td>
  </tr>
);

export default class AddEvaluate extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeReason = this.onChangeReason.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      reason: "",
      status: "",
      date: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/gettest/tests/")
      .then((response) => {
        this.setState({
          name: response.data.name,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  TestList() {
    return this.state.Test.map((currentTest) => {
      return <Test Test={currentTest} key={currentTest._id} />;
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
      .post("http://localhost:4000/api/evt/topic/", Topic)
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
          <div className="col-6">
            <br />
            <img
              src="https://thumbs.dreamstime.com/b/time-to-evaluate-blackboard-48391240.jpg"
              width="60%"
              height="40%"
            />
          </div>{" "}
          <div className="col-6">
            <div className="myformstyle">
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
