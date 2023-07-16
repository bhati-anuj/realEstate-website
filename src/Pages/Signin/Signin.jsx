import React, { useRef } from "react";
import { Form, Button, FormGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import style from "./Signin.module.css";
import { addLoginUser, login } from "../../Store/LoginUserSlice/LoginUserSlice";

const Signin = () => {
  const navigate = useNavigate();
  const userEmailRef = useRef();
  const userPasswordRef = useRef();

  const dispatch = useDispatch();

  const dataData = useSelector((state) => {
    return state.users;
  });

  const handleSubmit = () => {
    const userObj = dataData.find(
      (obj) =>
        obj?.email === userEmailRef.current.value &&
        obj?.password === userPasswordRef.current.value
    );

    dispatch(addLoginUser(userObj));

    if (userObj != undefined) {
      dispatch(login(true));
      navigate("/home");
    } else alert("Please registered first");
  };

  return (
    <>
      <div className={style.signinContainer}>
        <Form className={style.signinForm}>
          <h1 style={{ margin: "25px", marginBottom: "50px" }}>Sign in</h1>

          <FormGroup
            style={{
              padding: "10px",
              paddingTop: "35px",
              margin: "10px",
              width: "50%",
              height: "30%",
            }}
          >
            <Form.Label>Email:</Form.Label>
            <Form.Control
              required
              type="email"
              ref={userEmailRef}
              placeholder="Enter your email "
            />

            <Form.Label>Password:</Form.Label>
            <Form.Control
              required
              type="password"
              ref={userPasswordRef}
              placeholder="Enter your password"
            />
          </FormGroup>
          <Button variant="secondary" onClick={handleSubmit}>
            Log in
          </Button>
          <br />
          <a>Don't have an account? </a>
          <Link to={"/Signup"}>Sign up</Link>
        </Form>
      </div>
    </>
  );
};

export default Signin;
