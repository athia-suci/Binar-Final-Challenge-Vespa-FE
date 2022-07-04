import React from "react";
import { Navbar, Container} from "react-bootstrap";
import "../Navbar/navbar.css";

export function InfoSellerNavbar() {


    return (
        <>
            <Navbar expand="lg" variant="light" >
                <Container className="home-navbar" >
                    <Navbar.Brand className="logo" href="/"></Navbar.Brand>
                    <div className="me-5">
                    <h3>Info Penawar</h3>
                    </div>
                    <div>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}