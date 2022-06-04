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
const Panel = (props) => (
  <tr>
    <td> {props.Panel.name} </td>
    <td> {props.Panel.topic} </td>
    <td> {props.Panel.date} </td>
    <td> {props.Panel.grp} </td>
  </tr>
);
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

    axios
      .get("http://localhost:4000/api/get/panels/")
      .then((response) => {
        this.setState({ Panel: response.data });
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
      .get("http://localhost:4000/api/get/panels/")
      .then((response) => {
        this.setState({ Panel: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteEvaluate(id) {
    if (window.confirm("Are you sure?")) {
      axios
        .delete("http://localhost:4000/api/del/topic/" + id)
        .then((response) => {
          console.log(response.data);
        });

      this.setState({
        Topic: this.state.Topic.filter((el) => el._id !== id),
      });
    }
  }

  TopicList() {
    return this.state.Topic.map((currentTopic) => {
      return <Topic Topic={currentTopic} key={currentTopic._id} />;
    });
  }

  PanelList() {
    return this.state.Panel.map((currentPanel) => {
      return <Panel Panel={currentPanel} key={currentPanel._id} />;
    });
  }

  render() {
    return (
      <div className="container">
        <div></div> <br />
        <div className="row">
          <div className="col-9 mt-1 mb-1">
            <h3> All Topics </h3>
          </div>
          <br></br>

          <br></br>
          <br></br>
        </div>
        <table className="table table-bordered table-white">
          <thead className="thead-dark" style={{ fontWeight: "bold" }}>
            <tr>
              <th>Panel Member </th>
              <th>Topic </th>
              <th>Group </th>

              <th> Action </th>
            </tr>
          </thead>
          <tbody style={{ fontWeight: "bold" }}>
            {this.state.Panel.map((props) => (
              <tr key={props.id}>
                <td> {props.name} </td>
                <td> {props.topic} </td>
                <td> {props.grp} </td>

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

              <th> Action </th>
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
                <td>
                  <Link to={"/editEva/" + props._id}>
                    <Button data-inline="true" variant="dark">
                      Update
                    </Button>
                  </Link>
                  <br />
                  <br />
                  <a
                    href=""
                    onClick={() => {
                      this.deleteEvaluate(props._id);
                    }}
                  >
                    <Button data-inline="true" variant="dark">
                      Delete
                    </Button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
