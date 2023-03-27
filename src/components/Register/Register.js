import React, { useState }from 'react'
import './register.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function Register() {
  
  const [user, setUser] = useState({
    name:"",
    email: "",
    password: "",
  })

  const handleChange = e => {
    const { name, value } = e.target
    setUser({
        ...user,
        [name]: value
    })
}

  const register = () => {
    const {name, email, password} = user;
    if(name && email && password){
      axios.post("http://localhost:9002/register", user)
      .then(res => {
        alert(res.data.message)
      })
    }
      else {
        alert("invlid input")
      }
  }

  return (
    <section>
    <div className="container">
      <h1 className='title'>Register yourself as a New User</h1>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Your Name</Form.Label>
          <Form.Control name="name" value={user.name} onChange={handleChange} type="text" placeholder="Enter your Name" />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" value={user.email} onChange={handleChange} type="email" placeholder="Enter email" />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" value={user.password} onChange={handleChange} type="password" placeholder="Password" />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button onClick={register} variant="primary" type="submit">
          Register
        </Button>
        <Button className="mx-5" variant="primary" type="button">
          Login
        </Button>
      </Form>
    </div>
  </section>
  );
}
