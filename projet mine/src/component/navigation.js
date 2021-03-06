import React from 'react';
import { NavLink } from 'react-router-dom';
import "../style/tout.scss";
import { useSelector } from 'react-redux';

import Card from "../component/Card.jsx";
import { Navbar, NavbarBrand, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





const Navigation = () => {
    const state= useSelector((state)=>state.handleCart);

    return (
        <div className="Navigation">
            <Navbar bg="dark" variant="dark" fixed="top" >

                <Container >
                    <NavbarBrand >

                        <NavLink className={"youfirst"} exact to="/" activeClassName='nan-active' > <strong> you first </strong></NavLink>
                    </NavbarBrand>

                    <Nav>
                        <NavLink className={"exo"} exact to="/" activeClassName='nan-active'>home</NavLink>
                        <NavLink className={"exo"} exact to="menu" activeClassName='nan-active>'>menu</NavLink>
                        <NavLink className={"exo"} exact to="reservation" activeClassName='nan-active'> reservation </NavLink>
                        <NavLink className={"exo"} exact to="Contact" activeClassName='nan-active'> contact </NavLink>
                        <NavLink className={"exo"} exact to="about" activeClassName='nan-active'> about us </NavLink>
                        <NavLink className={"exo"} exact to="/cart" > <span className="fa fa-shopping-cart me-1"></span> Cart ({state.length})
            </NavLink>
  
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;