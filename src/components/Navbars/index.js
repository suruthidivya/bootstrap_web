import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import { InputText } from "../Inputgrp";
import { LearnBtn } from "../LearnBtn";


export const Navbars = () => {
  const [state, setState] = React.useState({ username: "", pwd: "" });
  const updateUsername = (username) => setState({ ...state, username });
  const updatePwd = (pwd) => setState({ ...state, pwd });
  const submitBtn = () => alert('submitted');


  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Project Name</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <div class="form_ele">
            <InputText id="username" value={state.username} placeholder={"Email"} className="username form-control pr-13" onChange={updateUsername} type="text" />
            <InputText id="pwd" value={state.pwd} placeholder="Password" className="pwd pr-13" onChange={updatePwd} type="password" />
            <LearnBtn id="submitBtn" className="btn btn-primary submitBtn" value="submit" onClick={submitBtn} />
          </div>
        </Container>
      </Navbar>

    </>
  );
}