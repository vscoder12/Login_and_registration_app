import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./login.css";
import axios from 'axios'
import { Navigate } from "react-router-dom";

export default function Login({setLoginUser}) {
  
  // const history = useHistory()
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleChange = e => {
    const { name, value } = e.target
    setUser({
        ...user,
        [name]: value
    })
}

  const login = () => {
    axios.post('http://localhost:9002/login', user)
    .then(res => {
      alert(res.data.message)
      setLoginUser(res.data.user)
      // history.push('/')
      return <Navigate replace to="/login" />;
    })

  }

  return (
    <section>
      <div className="container">
        <h1 className="title">Welcome to our Login Page</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control required name="email" value={user.email} type="email" onChange={handleChange} placeholder="Enter email" />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control required name="password" type="password" value={user.password} onChange={handleChange} placeholder="Password" />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <Button onClick={login} variant="primary" type="submit">
            Login
          </Button>
          <Button className="mx-5" variant="primary" type="button">
            register?
          </Button>
        </Form>
      </div>
    </section>
  );
}
