import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";

const Topic = (props) => (
  <tr>
    <td> {props.Topic.reason} </td>
    <td> {props.Topic.date} </td>
    <td> {props.Topic.status} </td>
  </tr>
);
const Test = (props) => (
  <tr>
    <td> {props.Test.name} </td>
  </tr>
);
export default class EvaluateTopicList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Topic: [],
      Test: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/get/topics/")
      .then((response) => {
        this.setState({ Topic: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:4000/api/gettest/tests/")
      .then((response) => {
        this.setState({ Test: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getPosts() {
    axios
      .get("http://localhost:4000/api/get/topics/")
      .then((response) => {
        this.setState({ Topic: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:4000/api/gettest/tests/")
      .then((response) => {
        this.setState({ Test: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  TopicList() {
    return this.state.Topic.map((currentTopic) => {
      return <Topic Topic={currentTopic} key={currentTopic._id} />;
    });
  }

  TestList() {
    return this.state.Test.map((currentTest) => {
      return <Test Test={currentTest} key={currentTest._id} />;
    });
  }

  render() {
    return (
      <div className="container">
        <div></div> <br />
        <div className="row">
          <div className="col-9 mt-1 mb-1">
            <h3> All Topic Evaluate Details </h3>
          </div>
          <br></br>

          <br></br>
          <br></br>
        </div>
        <table className="table table-bordered table-white">
          <thead className="thead-dark" style={{ fontWeight: "bold" }}>
            <tr>
              <th>Topic Name </th>
              <th> Evaluate </th>
            </tr>{" "}
          </thead>
          <tbody style={{ fontWeight: "bold" }}>
            {" "}
            {this.state.Test.map((props) => (
              <tr key={props.id}>
                <td> {props.name} </td>

                <td>
                  <Link to={"/addEva/" + props._id}>
                    <Button data-inline="true" variant="dark">
                      Evaluate Topic
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <br />
        <br />
        <div></div> <br />
        <div className="row">
          <div className="col-9 mt-1 mb-1">
            <h3> All Topic Evaluate Details </h3>
          </div>
          <br></br>

          <br></br>
          <br></br>
        </div>
        <table className="table table-bordered table-white">
          <thead className="thead-dark" style={{ fontWeight: "bold" }}>
            <tr>
              <th> Name </th>
              <th> Reason </th>
              <th> Date </th>
              <th> Status </th>
              <th> Action </th>
            </tr>{" "}
          </thead>
          <tbody style={{ fontWeight: "bold" }}>
            {" "}
            {this.state.Topic.map((props) => (
              <tr key={props.id}>
                <td> {props.name} </td>
                <td> {props.reason} </td>
                <td> {props.date} </td>
                <td> {props.status} </td>
                <td>
                  <Link to={"/" + props._id}>
                    <Button data-inline="true" variant="dark">
                      Update
                    </Button>
                  </Link>

                  <Link to={"/" + props._id}>
                    <Button data-inline="true" variant="dark">
                      Delete
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
