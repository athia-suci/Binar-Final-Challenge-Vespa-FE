import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../../slices/userSlice";
import axios from "axios";
import { Navbar, Nav, Container, Form, ButtonNavbar, Button, Dropdown, DropdownButton, Offcanvas } from "react-bootstrap";
import { FiLogIn, FiList, FiBell, FiUser, FiLogOut } from "react-icons/fi";
import "./Navbar.css";

export function HomeNavbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [user, setUser] = useState({});
    const [open, setOpen] = React.useState(true);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Check status user login
                // 1. Get token from localStorage
                const token = localStorage.getItem("token");

                // 2. Check token validity from API
                const currentUserRequest = await axios.get(
                    "http://localhost:2000/v1/users",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const currentUserResponse = currentUserRequest.data;

                if (currentUserResponse.status) {
                    dispatch(
                        addUser({
                            user: currentUserResponse.data.user,
                            token: token,
                        })
                    );
                    setUser(currentUserResponse.data.user);
                }
            } catch (err) {
                setIsLoggedIn(false);
            }
        };

        fetchData();
    }, []);

    const logout = () => {
        localStorage.removeItem("token");

        setIsLoggedIn(false);
        setUser({});

        navigate("/");
    };



    return (
        <>
            <Navbar expand="lg" variant="light" >
                <Container className="home-navbar" >
                    <Navbar.Brand className="logo" href="/cars"></Navbar.Brand>
                    <div className="me-auto">
                    </div>
                    <div>
                        <Navbar.Toggle onClick={handleShow} aria-controls="off-canvas" />
                        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                            {!isLoggedIn ? (
                                <Navbar.Offcanvas show={show} onHide={handleClose} id="off-canvas">
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title className="title-navbar-mobile">Second Hand</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <Button variant="success" className="button-register" href="/login">
                                            <FiLogIn className="icon-register" />
                                            Masuk
                                        </Button>
                                    </Offcanvas.Body>
                                </Navbar.Offcanvas>

                            ) : (
                                <>
                                    <FiList className="icon-list-header m-3" />
                                    <FiBell className="icon-bell-header m-3" />
                                    <Dropdown >
                                        <Dropdown.Toggle variant="white" id="dropdown-basic">
                                            <FiUser className="icon-user-header" />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item className="mt-2" href="#/action-1" >Ubah Akun</Dropdown.Item>
                                            <Dropdown.Item className="mt-2" href="#/action-1" >Pengaturan Akun</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Button
                                        variant="danger"
                                        className="mx-1"
                                        onClick={logout}
                                    >
                                      Logout <FiLogOut/>
                                    </Button>

                                    <Offcanvas show={show} onHide={handleClose} id="off-canvas">
                                        <Offcanvas.Header closeButton>
                                            <Offcanvas.Title className="title-navbar-mobile">Second Hand</Offcanvas.Title>
                                        </Offcanvas.Header>
                                        <Offcanvas.Body>
                                            <Dropdown.Item href="#/action-1">Notifikasi</Dropdown.Item>
                                            <Dropdown.Item className="mt-2" href="#/action-1">Daftar Jual</Dropdown.Item>
                                            <Dropdown.Item className="mt-2" href="#/action-1">Akun Saya</Dropdown.Item>
                                        </Offcanvas.Body>
                                    </Offcanvas>

                                    {/* for notification */}
                                    {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={14} color="error">
                                <FiBell className="icon-bell-header mx-3" />
                            </Badge>
                            </IconButton> */}

                                </>
                            )
                            }
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}