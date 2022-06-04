import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";

const Test = (props) => (
  <tr>
    <td> {props.Test.topic} </td>
    <td> {props.Test.grp} </td>
  </tr>
);
export default class AddPanelList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Test: [],
    };
  }

  componentDidMount() {
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
      .get("http://localhost:4000/api/gettest/tests/")
      .then((response) => {
        this.setState({ Test: response.data });
      })
      .catch((error) => {
        console.log(error);
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
            <h3> Add Panel For Topic Evaluate </h3>
          </div>
          <br></br>

          <br></br>
          <br></br>
        </div>
        <table className="table table-bordered table-white">
          <thead className="thead-dark" style={{ fontWeight: "bold" }}>
            <tr>
              <th>Presentation Topic </th>
              <th>Group </th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody style={{ fontWeight: "bold" }}>
            {this.state.Test.map((props) => (
              <tr key={props.id}>
                <td> {props.topic} </td>
                <td> {props.grp} </td>

                <td>
                  <Link to={"/addPanel/" + props._id}>
                    <Button data-inline="true" variant="dark">
                      Add Panel
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
