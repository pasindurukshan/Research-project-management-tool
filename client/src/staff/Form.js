// import { required } from 'nodemon/lib/config';
import React, { useState } from 'react'
import FormInput from './components/FormInput'

const Form = () => {
  const [values,setValues] = useState({
    name:"",
    userName:"",
    email:"",
    password:"",
    role:""
  });

  const inputs = [
    {
      id:1,
      name:"name",
      type:"text",
      placeholder:"Name",
      label:"Name",
      required:true
    },
    {
      id:2,
      name:"username",
      type:"text",
      placeholder:"Username",
      errorMessage: "Username should be 3-16 characters long and shouldn't contain ay special characters!",
      label:"Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required:true
    },
    {
      id:3,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage: "Should be a valid email!",
      label:"Email",
      required:true
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      errorMessage: "Passowrd should be 8-20 characters long and should contain numbers and special characters",
      label:"Password",
      pattern: `^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}`,
      required:true
    }
    // {
    //   id:5,
    //   name:"role",
    //   type:"text",
    //   placeholder:"Role",
    //   label:"Role",
    //   required:true
    // }
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  console.log(values);

  return (
    <div className='form'>
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          {inputs.map((input) => (
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
          ))}
          <label>Role</label>
          <select>
            <option value="supervisor/co-supervisor">Supervisor/Co-supervisor</option>
            <option value="panelmember">Panel Member</option>
            <option value="student">Student</option>
          </select>
          <button>Submit</button>
        </form>
    </div>
  )
}

export default Form