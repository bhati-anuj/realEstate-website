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
        <div className={style.sideImage}>
          <h1>Dikha-Dunga</h1>
          <p>You Dream it..We will find it</p>
        </div>
        <div className={style.formDiv}>
          <Form className={style.signinForm}>
            <h1 style={{ fontWeight: "800" }}>Welcome!</h1>
            <FormGroup className={style.formGroup}>
              <div>
                <Button
                  className=" btn-lg me-1 mb-4 "
                  style={{ backgroundColor: "#d9c6ab", borderColor: "white" }}
                >
                  <Link
                    to={"/signup"}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Sign up{" "}
                  </Link>
                </Button>

                <Button
                  className="mb-4 btn-lg  me-1"
                  style={{ backgroundColor: "white", borderColor: "#d9c6ab" }}
                >
                  {" "}
                  <Link
                    to={"/"}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Sign in{" "}
                  </Link>
                </Button>
              </div>

              <Form.Control
                style={{ height: "50px", margin: "15px" }}
                required
                type="email"
                ref={userEmailRef}
                placeholder="Enter your email "
              />

              <Form.Control
                style={{ height: "50px", margin: "15px" }}
                required
                type="password"
                ref={userPasswordRef}
                placeholder="Enter your password"
              />
            </FormGroup>
            <Button variant="secondary" onClick={handleSubmit}>
              Log in
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Signin;
