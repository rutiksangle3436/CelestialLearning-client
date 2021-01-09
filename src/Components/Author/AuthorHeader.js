import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../assets/CL.png';
import { Button } from 'shards-react';
import { BsPersonSquare } from 'react-icons/bs';
import { Dropdown } from 'react-bootstrap';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormInput,
    Collapse
} from 'shards-react';

export const Header_auth = () => {
    return (
        <Navbar className="nav" expand="md">
            <NavbarBrand>
                <img src={logo}  width='90' heigh='90' />
            </NavbarBrand>
            <NavbarToggler />

            <Collapse navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink>Categories</NavLink>
                    </NavItem>
                </Nav>
                <Nav navbar>
                    <InputGroup size="sm" seamless>
                        <InputGroupAddon type="prepend">
                            <InputGroupText>
                                <SearchIcon />
                            </InputGroupText>
                        </InputGroupAddon>
                        <FormInput className="border-0" placeholder="Search..." />
                    </InputGroup>
                </Nav>
            </Collapse>
            <div className="right">
                <Dropdown>
                    <Dropdown.Toggle variant="inf" id="dropdown-basic">
                        <BsPersonSquare size="30" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/author/profile">Profile</Dropdown.Item>
                        <Dropdown.Item href="/author/settings">Account Settings</Dropdown.Item>
                        <Dropdown.Item href="/">Log Out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </Navbar>
    );
};

export default Header_auth;
