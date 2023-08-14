import React, { useRef, useState } from "react";
import { Form, FormGroup, Row, Col, Button } from "react-bootstrap";
import style from "./Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../Store/UserSlice/UserSlice";
import { v4 } from "uuid";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState(false);
  const nameRef = useRef();

  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const ID = v4();

    const regEmail = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
    const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/;

    if (!regEmail.test(emailRef.current.value)) {
      setEmailError(true);
    } else if (!regPassword.test(passwordRef.current.value)) {
      setPasswordError(true);
    } else {
      setEmailError(!emailError);
      setPasswordError(!passwordError);

      if (
        nameRef.current.value === "" ||
        emailRef.current.value === "" ||
        passwordRef.current.value === ""
      ) {
        setError(true);

        alert("All field are manadatory");
      } else {
        setError(false);
        alert("Successfully Registered");

        const userData = {
          email: emailRef.current.value,
          phone: phoneRef.current.value,
          password: passwordRef.current.value,

          name: nameRef.current.value,
          userID: ID,
          savedArray: [],
          status: false,
        };

        dispatch(addUser(userData));
        navigate("/");
      }
    }
  };
  return (
    <>
      <div className={style.signupContainer}>
        <div className={style.sideImage}>
          <h1 >Dikha-Dunga</h1>
          <p>You Dream it..We will find it</p>
        </div>
        <div className={style.formDiv}>
          <Form onSubmit={handleSubmit} className={style.signupForm}>
            <h1 style={{fontWeight:"800"}}>
           Welcome!
            </h1>
            <FormGroup className={style.formGroup}>
            <div>
            <Button className=" btn-lg me-1 mb-1 " style={{backgroundColor:"white",borderColor:"#d9c6ab"}}> 
            <Link to={"/signup"} style={{textDecoration:"none",color:"black",}}>Sign up </Link>
            </Button>
            
            <Button className="mb-1 btn-lg  me-1"
            style={{backgroundColor:"#d9c6ab",borderColor:"white"}}
            > <Link to={"/"} style={{textDecoration:"none",color:"black"}}>Sign in </Link></Button>
            </div>
            
            
            
          
              <Form.Control
                style={{  height: "50px",margin:"20px" }}
                placeholder="Full name"
                ref={nameRef}
                required
              />

              {!emailError ? (
                <Form.Control
                style={{ height: "50px",margin:"20px" }}
                  required
                  type="email"
                  placeholder="Enter your email "
                  ref={emailRef}
                />
              ) : (
                <Form.Control
                  isInvalid
                  style={{ height: "50px",margin:"20px" }}
                  type="email"
                  placeholder="Enter your email "
                  ref={emailRef}
                />
              )}

              <Form.Control
                required
                style={{ height: "50px",margin:"20px" }}
                type="number"
                placeholder="Enter your phone number"
                ref={phoneRef}
              />

              {!passwordError ? (
                <Form.Control
                  required
                  style={{ height: "50px",margin:"20px" }}
                  type="password"
                  placeholder="Create your password"
                  ref={passwordRef}
                />
              ) : (
                <>
                  <Form.Control
                    isInvalid
                    style={{  height: "50px",margin:"20px" }}
                    type="password"
                    placeholder="Create your password"
                    ref={passwordRef}
                  />
                  <Form.Control.Feedback type="invalid">
                    Password must use a combination of these:
                    <br />
                    I. Atleast 1 upper case letters (A – Z)
                    <br />
                    II. Lower case letters (a – z)
                    <br />
                    III. Atleast 1 number (0 – 9)
                    <br />
                    IV. Atleast 1 non-alphanumeric symbol (e.g. @ ‘$%£!’);
                  </Form.Control.Feedback>
                </>
              )}
            </FormGroup>
            <Button variant="secondary" type="submit">
              Create Account
            </Button>
            
          </Form>
        </div>
      </div>
    </>
  );
};

export default Signup;
