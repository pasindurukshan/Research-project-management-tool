import React, { Component } from "react";

import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import swal from "@sweetalert/with-react";

import "./main.css";

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
      name: this.props.match.params.name,
      reason: this.state.reason,
      status: this.state.status,
      date: this.state.date,
    };
    console.log(Topic);

    axios
      .post("http://localhost:4000/api/add/topic/", Topic)
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
    const Name = this.props.match.params.name;
    console.log(Name);
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <div className="myformstyle">
              <div className="card-body">
                <div className="col-md-8 mt-4 mx-auto"> </div>
                <h3 className="text-center">
                  <font size="6">Evaluate</font>
                </h3>
                <br></br>
                <br></br>
                <form className="col-lg-6 offset-lg-3" onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label style={{ fontWeight: "bold" }}>Topic </label>
                    <input
                      type="text"
                      placeholder="Name"
                      required
                      className="form-control"
                      value={Name}
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
                    >
                      <option selected>Add Status</option>
                      <option value="Poor">Poor</option>
                      <option value="Fair">Fair</option>
                      <option value="Good">Good</option>
                      <option value="Excellent ">Excellent</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label style={{ fontWeight: "bold" }}>
                      Evaluated Date{" "}
                    </label>

                    <input
                      type="date"
                      placeholder="Date"
                      required
                      className="form-control"
                      onChange={this.onChangeDate}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Add "
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
