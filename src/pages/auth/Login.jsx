import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
// import InputGroup from 'react-bootstrap/InputGroup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const data = {
  email: "data@.com",
  password: "data123",
}


const Login = props => {
    const [email,setEmail] = useState();
    const [pass,setPass] = useState();
    
    const formSubmit =(e)=> {
      e.preventDefault();
        if (!email || !pass) {
          toast.info('Please, fill input', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }else {
            if (email  === data.email && pass === data.password){
              props.history.push('/admin');
            }else {
              toast.error('Email or Password is wrong', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            }
        }
    }


    


  return (
  <>
    <h1 className='text-center my-5'>Login</h1>
    <div className="d-flex align-items-center justify-content-center flex-column">
      <Col md={6}>
        <Form onSubmit={formSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control onChange={e=>{setEmail(e.target.value)}}  type="text" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={e=>{setPass(e.target.value)}}  type="password" placeholder="Enter your password" />
          </Form.Group>
          <Button   variant="primary" type="submit">
            Login
          </Button>
          <ToastContainer/>
        </Form> 
      </Col>
    </div>
  </>
  )
}

export default Login
