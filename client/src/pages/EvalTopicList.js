import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";

export default class EvalTopicList extends Component {
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
  }

  render() {
    return (
      <div className="container">
        <br></br>
        <br></br>
        <div className="row">
          <div className="col-9 mt-1 mb-1">
            <h3> All Accepted Topics </h3>
          </div>
          <br></br>

          <br></br>
          <br></br>
        </div>
        <div className="container">
          <br></br>
          <table className="table table-bordered table-white">
            <thead className="thead-dark" style={{ fontWeight: "bold" }}>
              <tr>
                <th> Group </th>
                <th> Topic </th>
                <th> Reason </th>
                <th> Status </th>
                <th> Accepted Date </th>
              </tr>
            </thead>
            <tbody style={{ fontWeight: "bold" }}>
              {this.state.Topic.map((props) => (
                <tr key={props.id}>
                  <td> {props.grp} </td>
                  <td> {props.topic} </td>
                  <td> {props.reason} </td>
                  <td> {props.status} </td>
                  <td> {props.date} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
