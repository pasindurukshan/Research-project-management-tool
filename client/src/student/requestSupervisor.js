import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert2';



export default class requestSupervisor extends Component {
  //constructor define variables

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.state = {
      

      studentId1: "",
      studentName1: "",
      studentEmail1: "",
      phoneNo1: "",

      reseachTopic: "",
      reseachFeild: "",
      description: "",



    }
  }


  //handle keyboard inputs 
  handleInputChange = (e) => {
   
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value
    })
    this.validate()

  }


  //Form Validation part

  validate = () => {
    // let orderIdError="";
    let studentId1Error = "";
    let studentName1Error = "";
    let studentEmail1Error = "";
    let phoneNo1Error = "";

    let reseachTopicError = "";
    let reseachFeildError = "";
    let descriptionError = "";
    



    //check statements and pass error message
    if (!this.state.studentId1) {
      studentId1Error = "* Student ID is Required!"
    }
    if (!this.state.studentName1) {
      studentName1Error = "* Student Name is Required!"
    }
    if (!this.state.studentEmail1) {
      studentEmail1Error = "* Student Email  is Required"
    }
    if (!this.state.phoneNo1) {
      phoneNo1Error = "* Student Phone No  is Required"
    }

    if (!this.state.reseachTopic) {
      reseachTopicError = "* reseachTopic is Required!"
    }
    if (!this.state.reseachFeild) {
      reseachFeildError = "* reseachFeild  is Required"
    }
    if (!this.state.description) {
      descriptionError = "* description is Required"
    }

    //check any errors
    if (
      studentId1Error ||
      studentName1Error ||
      studentEmail1Error ||
      phoneNo1Error ||
      reseachTopicError ||
      reseachFeildError ||
      descriptionError

    ) {
      this.setState({

        studentId1Error,
        studentName1Error,
        studentEmail1Error,
        phoneNo1Error,
        reseachTopicError,
        reseachFeildError,
        descriptionError

      });
      return false;

    }

    return true;

  }






  //on submit method
  onSubmit = (e) => {

    // dynamically page refresh

    e.preventDefault();
    const isValid = this.validate();
    const {

      studentId1,
      studentName1,
      studentEmail1,
      phoneNo1,
      reseachTopic,
      reseachFeild,
      description,


    } = this.state;


    const data = {

      studentId1: studentId1,
      studentName1: studentName1,
      studentEmail1: studentEmail1,
      phoneNo1: phoneNo1,
      reseachTopic: reseachTopic,
      reseachFeild: reseachFeild,
      description: description,

  
    }
    if (isValid) {
      console.log(data)

      //backend url called
      debugger
      axios.post("http://localhost:4000/api/v1/editor/requestsupervisor", data).then((res) => {
        console.log(res.data)
        if (res.data) {
          swal.fire("Created", "Create Successfully !!", "success");

        
          //clear field after inserting
          this.setState(
            {

              studentId1: "",
              studentName1: "",
              studentEmail1: "",
              phoneNo1: "",
              reseachTopic: "",
              reseachFeild: "",
              description: "",
              descriptionError: "",

            }

          )
        }
      })
    }
  }


  render() {
    return (
      <div className="container">
        <div className="col-md-6 mt-5 mx-auto">




          <div class="p-3 mb-2 bg-light text-dark rounded-3">
            <h2 className="h3 mb-3 front-weight-normal">Request Supervisor </h2>
            <form className="needs-validation" noValidate>


              <div class="form-row">
                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}>Student ID</label>
                  <input type="text"
                    className="form-control"
                    name="studentId1"
                    placeholder="Enter Student ID"
                    value={this.state.studentId1}
                    onChange={this.handleInputChange} />

                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.studentId1Error}
                  </div>




                </div>
                &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}>Student Name</label>
                  <input type="text"
                    className="form-control"
                    name="studentName1"
                    placeholder="Enter Student Name"
                    value={this.state.studentName1}
                    onChange={this.handleInputChange} />

                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.studentName1Error}
                  </div>


                </div>
              </div>
              <div class="form-row">
                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}>Student Email</label>
                  <input type="email"
                    className="form-control"
                    name="studentEmail1"
                    placeholder="Enter Student Email"
                    value={this.state.studentEmail1}
                    onChange={this.handleInputChange} />

                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.studentEmail1Error}
                  </div>

                </div>
                &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}>Student Phone No:</label>
                  <input type="Number"
                    className="form-control"
                    name="phoneNo1"
                    placeholder="Enter Sale Journal"
                    value={this.state.phoneNo1}
                    onChange={this.handleInputChange} />

                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.phoneNo1Error}
                  </div>



                </div>
              </div>

              <hr />

              <div class="form-row">
                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}>Research Topic</label>
                  <input type="text"
                    className="form-control"
                    name="reseachTopic"
                    placeholder="Enter Student ID"
                    value={this.state.reseachTopic}
                    onChange={this.handleInputChange} />

                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.reseachTopicError}
                  </div>




                </div>
                &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}>Research Field</label>
                  <input type="text"
                    className="form-control"
                    name="reseachFeild"
                    placeholder="Enter Student Name"
                    value={this.state.reseachFeild}
                    onChange={this.handleInputChange} />

                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.reseachFeildError}
                  </div>


                </div>
              </div>
              
                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}>Description</label>
                  <input type="description"
                    className="form-control"
                    name="description"
                    placeholder="Enter Student Email"
                    value={this.state.description}
                    onChange={this.handleInputChange} />

                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.descriptionError}
                  </div>

                </div>
         
                

              <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                <i className="far fa-check-square"></i>
                &nbsp; Save
              </button>



            </form>

          </div>
        </div>










      </div>
    )
  }
}
