import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';


export default class studentDashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            studentGroup: [],
            supervisor: [],
            coSupervisor: [],
        };
    }

    componentDidMount() {
        this.retrieveWorkshops();
        this.retrieveRequestSupervisor();
        this.retrieveRequestCoSupervisor();
    }
    //retrieve all data
    //backend url called
    retrieveWorkshops() {
        debugger
        axios.get(`http://localhost:4000/api/v1/editor/workshop/`)
          .then(response => {
            this.setState({
                studentGroup: response.data.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }

    retrieveRequestSupervisor() {
        debugger
        axios.get(`http://localhost:4000/api/v1/editor/requestsupervisor/`)
          .then(response => {
            this.setState({
                supervisor: response.data.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }

    retrieveRequestCoSupervisor() {
        debugger
        axios.get(`http://localhost:4000/api/v1/editor/requestcosupervisor/`)
          .then(response => {
            this.setState({
                coSupervisor: response.data.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }






    render() {

        return (
        <div className='col-12'>
            <div id="wrapper" className="toggled">
                <div id="page-content-wrapper">
                        <div className="container bg-info rounded-4">
                            <br />
                            <h4>Student Group Details</h4>
                            <hr />
                            <div class="p-3 mb-2 bg-primary text-white rounded-3">
                                <table className=" p-3 mb-2 table table-bordered border-info table table-info table-striped">
                                    <thead>

                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Student ID Number</th>
                                            <th scope="col">Student Name</th>
                                            <th scope="col">Student Email</th>
                                            <th scope="col">Student Phone No</th>
                                        
                                            <th scope="col">&nbsp;&nbsp;&nbsp;&nbsp;Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.studentGroup.map((studentGroup, index) => (

                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                
                                                <td> {studentGroup.studentId1}</td>
                                                <td>{studentGroup.studentName1}</td>
                                                <td> {studentGroup.studentEmail1}</td>
                                                <td>{studentGroup.phoneNo1}</td>

                                                <td>
                                                    &nbsp;
                                                    <a className="btn btn-danger" href="#" onClick={() => this.onDelete(studentGroup._id)}>
                                                        <i className="far fa-trash-alt"></i>&nbsp;Update
                                                    </a>
                                                </td>
                                            </tr>

                                        ))}
                                    </tbody>

                                </table>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <br /> <br /> <br />
                <div id="page-content-wrapper">
                    <div className="container-fluid">

                        <div className="container bg-info rounded-4">
                            <br />
                            <h4>Request Supervisor  Details</h4>
                            <hr />

                            <div className="p-3 mb-3 bg-primary text-dark rounded-3 "style={{ overflow: 'scroll' }}>

                                <table className="table table-hover  table table-bordered border-info table table-info table-striped" style={{ marginTop: '5px' }}>
                                    <thead>

                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Student ID Number</th>
                                            <th scope="col">Student Name</th>
                                            <th scope="col">Student Email</th>
                                            <th scope="col">Student Phone No</th>
                                            <th scope="col">Research Topic</th>
                                            <th scope="col">Research Field</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Is Approved</th>

                                        
                                            <th scope="col">&nbsp;&nbsp;&nbsp;&nbsp;Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.supervisor.map((supervisor, index) => (

                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                
                                                <td> {supervisor.studentId1}</td>
                                                <td>{supervisor.studentName1}</td>
                                                <td> {supervisor.studentEmail1}</td>
                                                <td>{supervisor.phoneNo1}</td>
                                                <td>{supervisor.reseachTopic}</td>
                                                <td> {supervisor.reseachFeild}</td>
                                                <td>{supervisor.description.substring(0, 25)}</td>
                                                <td>{supervisor.staus}</td>
                                                <td>
                                                    &nbsp;
                                                    <a className="btn btn-danger" href="#" onClick={() => this.onDelete(supervisor._id)}>
                                                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                                                    </a>
                                                </td>
                                            </tr>

                                        ))}
                                    </tbody>

                                </table>

                            </div>
                        </div>
                    </div>
                </div>
                <br /> <br /> <br />
                <div id="page-content-wrapper">
                    <div className="container-fluid">

                        <div className="container bg-info rounded-4">
                            <br />
                            <h4>Request Co-Supervisor  Details</h4>
                            <hr />

                            <div class="p-3 mb-3 bg-primary text-dark rounded-3" style={{ overflow: 'scroll' }} >

                            <table className="table table-hover  table table-bordered border-info table table-info table-striped" style={{ marginTop: '5px' }}>
                                    <thead>

                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Student ID Number</th>
                                            <th scope="col">Student Name</th>
                                            <th scope="col">Student Email</th>
                                            <th scope="col">Student Phone No</th>
                                            <th scope="col">Research Topic</th>
                                            <th scope="col">Research Feild</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Supervisor Name</th>
                                            <th scope="col">Supervisor Email</th>
                                           
                                            <th scope="col">&nbsp;&nbsp;&nbsp;&nbsp;Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.coSupervisor.map((coSupervisor, index) => (

                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                
                                                <td> {coSupervisor.studentId1}</td>
                                                <td>{coSupervisor.studentName1}</td>
                                                <td> {coSupervisor.studentEmail1}</td>
                                                <td>{coSupervisor.phoneNo1}</td>
                                                <td> {coSupervisor.reseachTopic}</td>
                                                <td>{coSupervisor.reseachFeild}</td>
                                                <td> {coSupervisor.description}</td>
                                                <td>{coSupervisor.supervisor}</td>
                                                <td>{coSupervisor.supervisorEmail}</td>
                                              
                                                <td>
                                                    &nbsp;
                                                    <a className="btn btn-danger" href="#" onClick={() => this.onDelete(coSupervisor._id)}>
                                                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                                                    </a>
                                                </td>
                                            </tr>

                                        ))}
                                    </tbody>

                                </table>

                            </div>
                        </div>
                    </div>
                </div>

            </div>


        )
    }
}
