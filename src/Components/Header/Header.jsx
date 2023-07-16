import React from "react";
import {
  Container,
  Nav,
  Navbar,
  DropdownButton,
  ButtonGroup,
  Dropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { login } from "../../Store/LoginUserSlice/LoginUserSlice";

const Header = () => {
  const loginUserData = useSelector((state) => {
    return state.loginUsers;
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(login(false));
  
  };

  const handleSave = () => {
    navigate("/saved");
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container fluid>
          <Navbar.Brand>
            <Link
              to={"/home"}
              style={{
                textDecoration: "none",
                color: "red",
                fontWeight: "700",
                fontSize: "1.5rem",
              }}
            >
              Dikha-Dunga.com
            </Link>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                {" "}
                <Link
                  to={"/home"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Home
                </Link>
              </Nav.Link>
            </Nav>

            <ButtonGroup className="mx-4 ">
              <DropdownButton
                as={ButtonGroup}
                title={loginUserData[0].name}
                id="bg-nested-dropdown"
              >
                <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={handleSave}>
                  Saved{" "}
                </Dropdown.Item>
                <Dropdown.Item eventKey="3" onClick={handleLogout}>
                  Logout
                </Dropdown.Item>
              </DropdownButton>
            </ButtonGroup>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
