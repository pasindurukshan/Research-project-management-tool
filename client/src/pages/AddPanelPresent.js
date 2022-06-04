import React, { Component } from "react";

import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import swal from "@sweetalert/with-react";

import "./main.css";

export default class AddPanel extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeTopic = this.onChangeTopic.bind(this);

    this.onChangeGrp = this.onChangeGrp.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      topic: "",
      grp: "",
      date: "",
      Panel: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/get/test/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          topic: response.data.topic,
          grp: response.data.grp,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeTopic(e) {
    this.setState({
      topic: e.target.value,
    });
  }

  onChangeGrp(e) {
    this.setState({
      grp: e.target.value,
    });
  }
  onChangeDate(e) {
    this.setState({
      date: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const Panel = {
      name: this.state.name,
      topic: this.state.topic,
      grp: this.state.grp,
      date: this.state.date,
    };
    console.log(Panel);

    axios
      .post("http://localhost:4000/api/add/panelp/", Panel)
      .then((res) => console.log(res.data));

    swal({
      title: "Done!",
      text: "Add Successfully!",
      icon: "success",
      button: "Okay!",
    }).then((value) => {
      swal((window.location = "/pPanelList/"));
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
                  <font size="6">Add Panel Member To Panel</font>
                </h3>
                <br></br>
                <br></br>
                <form className="col-lg-6 offset-lg-3" onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label style={{ fontWeight: "bold" }}>
                      Add Panel Member
                    </label>
                    <input
                      type="text"
                      placeholder="Panel Member"
                      required
                      className="form-control"
                      value={this.state.name}
                      onChange={this.onChangeName}
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ fontWeight: "bold" }}>Add Topic</label>
                    <input
                      type="text"
                      placeholder="Topic"
                      required
                      className="form-control"
                      value={this.state.topic}
                      onChange={this.onChangeTopic}
                      disabled
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ fontWeight: "bold" }}>Select Group</label>
                    <input
                      type="text"
                      placeholder="Group"
                      required
                      className="form-control"
                      value={this.state.grp}
                      onChange={this.onChangeGrp}
                      disabled
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ fontWeight: "bold" }}>Date</label>

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
