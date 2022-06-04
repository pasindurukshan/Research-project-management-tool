import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";

export default class EvaluateTopicList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Topic: [],
      Panel: [],
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
        <div className="row">
          <div className="col-9 mt-1 mb-1">
            <h3> All Evaluated Topics </h3>
          </div>
          <br></br>

          <br></br>
          <br></br>
        </div>
        <table className="table table-bordered table-white">
          <thead className="thead-dark" style={{ fontWeight: "bold" }}>
            <tr>
              <th> Panel Member </th>
              <th> Topic </th>
              <th> Group </th>
              <th> Reason </th>
              <th> Status </th>
              <th> Evaluated Date </th>
              <th> State </th>
            </tr>
          </thead>
          <tbody style={{ fontWeight: "bold" }}>
            {this.state.Topic.map((props) => (
              <tr key={props.id}>
                <td> {props.name} </td>
                <td> {props.topic} </td>
                <td> {props.grp} </td>
                <td> {props.reason} </td>
                <td> {props.status} </td>
                <td> {props.date} </td>
                <td> {props.state} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
