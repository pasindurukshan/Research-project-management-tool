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
const Panel = (props) => (
  <tr>
    <td> {props.Panel.name} </td>
    <td> {props.Panel.topic} </td>
    <td> {props.Panel.date} </td>
    <td> {props.Panel.grp} </td>
  </tr>
);
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

    axios
      .get("http://localhost:4000/api/get/panelps/")
      .then((response) => {
        this.setState({ Panel: response.data });
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
      .get("http://localhost:4000/api/get/panelps/")
      .then((response) => {
        this.setState({ Panel: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deletePanel(id) {
    if (window.confirm("Are you sure?")) {
      axios
        .delete("http://localhost:4000/api/del/panelp/" + id)
        .then((response) => {
          console.log(response.data);
        });

      this.setState({
        Panel: this.state.Panel.filter((el) => el._id !== id),
      });
    }
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
            <h3> All Presentation </h3>
          </div>
          <br></br>

          <br></br>
          <br></br>
        </div>
        <table className="table table-bordered table-white">
          <thead className="thead-dark" style={{ fontWeight: "bold" }}>
            <tr>
              <th>Panel Member </th>
              <th>Presentation Topic </th>
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
                  <Link to={"/addEvaPre/" + props._id}>
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
              <th> Panel Member </th>
              <th>Presentation Topic </th>
              <th> Group </th>
              <th> Step 1 </th>
              <th> Step 2 </th>
              <th> Step 3 </th>
              <th> Step 4 </th>
              <th> Total Marks </th>
              <th> Evaluated Date </th>
              <th> Action </th>
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
