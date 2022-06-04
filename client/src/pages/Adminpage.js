import React from 'react'
import { Container, Button } from 'react-bootstrap'
import "./admin.css"

const Adminpage = () => {
  return (
    <div className='fill'>
        <header className='header'>
            <h1>Admin Dashboard</h1>
         </header>
        <aside>
        <ul>
            <li>
                <a href="">Delete/Update User</a>
            </li>
            <li>
                <a href="">Create Submission type</a>
            </li>
            <li>
                <a href="">Allocate panel member</a>
            </li>
            <li>
                <a href="">Create Markin Schemer</a>
            </li>
            <li>
                <a href="">Documentation template</a>
            </li>
            <li>
                <a href="">View Roles</a>
            </li>
        </ul>
        </aside>
        <div className='content'>
                Hello
        </div>
    </div>
  )
}

export default Adminpage