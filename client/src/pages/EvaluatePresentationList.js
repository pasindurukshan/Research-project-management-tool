import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";

const Presentation = (props) => (
  <tr>
    <td> {props.Presentation.stp1} </td>
    <td> {props.Presentation.stp2} </td>
    <td> {props.Presentation.stp3} </td>
    <td> {props.Presentation.stp4} </td>
    <td> {props.Presentation.total} </td>
    <td> {props.Presentation.date} </td>
  </tr>
);
const Test = (props) => (
  <tr>
    <td> {props.Test.name} </td>
  </tr>
);
export default class EvaluatePresentationList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Presentation: [],
      Test: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/get/presentations/")
      .then((response) => {
        this.setState({ Presentation: response.data });
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
      .get("http://localhost:4000/api/get/presentations/")
      .then((response) => {
        this.setState({ Presentation: response.data });
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

  PresentationList() {
    return this.state.Presentation.map((currentPresentation) => {
      return (
        <Presentation
          Presentation={currentPresentation}
          key={currentPresentation._id}
        />
      );
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
            <h3> All Presentation </h3>
          </div>
          <br></br>

          <br></br>
          <br></br>
        </div>
        <table className="table table-bordered table-white">
          <thead className="thead-dark" style={{ fontWeight: "bold" }}>
            <tr>
              <th>Presentation Topic </th>
              <th> Action </th>
            </tr>{" "}
          </thead>
          <tbody style={{ fontWeight: "bold" }}>
            {" "}
            {this.state.Test.map((props) => (
              <tr key={props.id}>
                <td> {props.name} </td>

                <td>
                  <Link to={`/addEvaPre/${props.name}`}>
                    <Button data-inline="true" variant="dark">
                      Evaluate
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
            <h3> All Evaluated Presentations </h3>
          </div>
          <br></br>

          <br></br>
          <br></br>
        </div>
        <table className="table table-bordered table-white">
          <thead className="thead-dark" style={{ fontWeight: "bold" }}>
            <tr>
              <th>Presentation Topic </th>
              <th> Step 1 </th>
              <th> Step 2 </th>
              <th> Step 3 </th>
              <th> Step 4 </th>
              <th> Total Marks </th>
              <th> Date </th>
              <th> Action </th>
            </tr>{" "}
          </thead>
          <tbody style={{ fontWeight: "bold" }}>
            {" "}
            {this.state.Presentation.map((props) => (
              <tr key={props.id}>
                <td> {props.name} </td>
                <td> {props.stp1} </td>
                <td> {props.stp2} </td>
                <td> {props.stp3} </td>
                <td> {props.stp4} </td>
                <td>{props.total}</td>
                <td> {props.date} </td>
                <td>
                  <Link to={"/editEvaPre/" + props._id}>
                    <Button data-inline="true" variant="dark">
                      Update
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
