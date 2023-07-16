import React, { useRef, useState } from "react";
import { Form, FormGroup, Row, Col, Button, InputGroup } from "react-bootstrap";
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
  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const dayRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();

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
        fnameRef.current.value === "" ||
        emailRef.current.value === "" ||
        passwordRef.current.value === "" ||
        monthRef.current.value === "" ||
        dayRef.current.value === "" ||
        yearRef.current.value === ""
      ) {
        setError(true);

        alert("All field are manadatory");
      } else {
        setError(false);
        alert("Successfully Registered");

        const userData = {
          fname: fnameRef.current.value,
          lname: lnameRef.current.value,
          email: emailRef.current.value,
          phone: phoneRef.current.value,
          password: passwordRef.current.value,
          DOB: `${dayRef.current.value} /
            ${monthRef.current.value}/
            ${yearRef.current.value}`,
          day: dayRef.current.value,
          month: monthRef.current.value,
          year: yearRef.current.value,
          name: `${fnameRef.current.value} ${lnameRef.current.value}`,
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
        <Form onSubmit={handleSubmit} className={style.signupForm}>
          <h1>Sign Up</h1>
          <FormGroup style={{ padding: "15px", margin: "10px" }}>
            <Row>
              <Col>
                <Form.Label>First name:</Form.Label>
                <Form.Control
                  placeholder="First name"
                  ref={fnameRef}
                  required
                />
              </Col>
              <Col>
                <Form.Label>Last name:</Form.Label>
                <Form.Control placeholder="Last name" ref={lnameRef} required />
              </Col>
            </Row>
            <Form.Label>Email:</Form.Label>

            {!emailError ? (
              <Form.Control
                required
                type="email"
                placeholder="Enter your email "
                ref={emailRef}
              />
            ) : (
              <Form.Control
                isInvalid
                type="email"
                placeholder="Enter your email "
                ref={emailRef}
              />
            )}

            <Form.Label>Phone:</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Enter your phone number"
              ref={phoneRef}
            />

            <Form.Label>Password:</Form.Label>
            {!passwordError ? (
              <Form.Control
                required
                type="password"
                placeholder="Create your password"
                ref={passwordRef}
              />
            ) : (
              <>
                <Form.Control
                  isInvalid
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

            <Row className="mb-3">
              <Form.Label>DOB:</Form.Label>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Control
                  type="number"
                  placeholder="Day"
                  ref={dayRef}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Select defaultValue="Month" ref={monthRef} required>
                  <option>Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Control
                  type="number"
                  placeholder="Year"
                  ref={yearRef}
                  required
                />
              </Form.Group>
            </Row>
          </FormGroup>
          <Button variant="secondary" type="submit">
            Create Account
          </Button>
          <br />
          <a>Already have an account? </a>
          <Link to={"/"}>Sign in </Link>
        </Form>
      </div>
    </>
  );
};

export default Signup;
