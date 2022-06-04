import React, { Component } from "react";

import axios from "axios";

export default class EvaluatePresentationList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Presentation: [],
      Panel: [],
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
  }

  render() {
    return (
      <div className="container">
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
              <th> Panel Member </th>
              <th>Presentation Topic </th>
              <th> Group </th>
              <th> Step 1 </th>
              <th> Step 2 </th>
              <th> Step 3 </th>
              <th> Step 4 </th>
              <th> Total Marks </th>
              <th> Evaluated Date </th>
            </tr>
          </thead>
          <tbody style={{ fontWeight: "bold" }}>
            {this.state.Presentation.map((props) => (
              <tr key={props.id}>
                <td> {props.name} </td>
                <td> {props.topic} </td>
                <td> {props.grp} </td>

                <td> {props.stp1} </td>
                <td> {props.stp2} </td>
                <td> {props.stp3} </td>
                <td> {props.stp4} </td>
                <td>{props.total}</td>
                <td> {props.date} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
