import React, { Component } from "react";

import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import swal from "@sweetalert/with-react";

import "./main.css";

export default class AddEvaluatePresentation extends Component {
  constructor(props) {
    super(props);

    this.onChangeSts1 = this.onChangeSts1.bind(this);
    this.onChangeSts2 = this.onChangeSts2.bind(this);
    this.onChangeSts3 = this.onChangeSts3.bind(this);
    this.onChangeSts4 = this.onChangeSts4.bind(this);

    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      stp1: "",
      stp2: "",
      stp3: "",
      stp4: "",
      total: "",
      date: "",
      Panel: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/get/panelp/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          name: response.data.name,
          topic: response.data.topic,
          grp: response.data.grp,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get("http://localhost:4000/api/get/panelp")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            Delivery: response.data.map((Panel) => Panel.DPname),
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeSts1(e) {
    this.setState({
      stp1: e.target.value,
    });
  }
  onChangeSts2(e) {
    this.setState({
      stp2: e.target.value,
    });
  }
  onChangeSts3(e) {
    this.setState({
      stp3: e.target.value,
    });
  }
  onChangeSts4(e) {
    this.setState({
      stp4: e.target.value,
    });
  }

  onChangeDate(e) {
    this.setState({
      date: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const Presentation = {
      name: this.state.name,
      topic: this.state.topic,
      grp: this.state.grp,
      stp1: this.state.stp1,
      stp2: this.state.stp2,
      stp3: this.state.stp3,
      stp4: this.state.stp4,
      total:
        this.state.stp1 * 1 +
        this.state.stp2 * 1 +
        this.state.stp3 * 1 +
        this.state.stp4 * 1,
      date: this.state.date,
    };
    console.log(Presentation);

    axios
      .post("http://localhost:4000/api/add/presentation/", Presentation)
      .then((res) => console.log(res.data));

    swal({
      title: "Done!",
      text: "Add Successfully!",
      icon: "success",
      button: "Okay!",
    }).then((value) => {
      swal((window.location = "/preList/"));
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <div className="myformstyle">
              <div className="card-body">
                <div className="col-md-8 mt-4 mx-auto"> </div>
                <h3 className="text-center">
                  <font size="6">Evaluate Presentation</font>
                </h3>
                <br></br>
                <br></br>
                <form className="col-lg-6 offset-lg-3" onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label style={{ fontWeight: "bold" }}>
                      Presentation Topic{" "}
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      required
                      className="form-control"
                      value={this.state.topic}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ fontWeight: "bold" }}> Step 1 </label>
                    <br />
                    <select
                      class="form-select"
                      style={{ width: "200px", height: "40px" }}
                      onChange={this.onChangeSts1}
                    >
                      <option selected>Add Marks</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label style={{ fontWeight: "bold" }}> Step 2 </label>
                    <br />
                    <select
                      class="form-select"
                      style={{ width: "200px", height: "40px" }}
                      onChange={this.onChangeSts2}
                    >
                      <option selected>Add Marks</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                    </select>
                  </div>{" "}
                  <div className="form-group">
                    <label style={{ fontWeight: "bold" }}> Step 3 </label>
                    <br />
                    <select
                      class="form-select"
                      style={{ width: "200px", height: "40px" }}
                      onChange={this.onChangeSts3}
                    >
                      <option selected>Add Marks</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label style={{ fontWeight: "bold" }}> Step 4 </label>
                    <br />
                    <select
                      class="form-select"
                      style={{ width: "200px", height: "40px" }}
                      onChange={this.onChangeSts4}
                    >
                      <option selected>Add Marks</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label style={{ fontWeight: "bold" }}>Evaluate Date </label>

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
