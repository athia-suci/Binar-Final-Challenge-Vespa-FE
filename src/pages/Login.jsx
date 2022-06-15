import { useRef, useState } from "react";
import { Form, Button, Alert, Row, Container, Col, } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css"
import PICT1 from '../images/login.png';

export default function Login() {
    const navigate = useNavigate();

    const emailField = useRef("");
    const passwordField = useRef("");

    const [errorResponse, setErrorResponse] = useState({
        isError: false,
        message: "",
    });

    const onLogin = async (e) => {
        e.preventDefault();

        try {
            const userToLoginPayload = {
                email: emailField.current.value,
                password: passwordField.current.value,
            };

            const loginRequest = await axios.post(
                "http://localhost:2000/v1/login",
                userToLoginPayload
            );

            const loginResponse = loginRequest.data;

            if (loginResponse.status) {
                localStorage.setItem("token", loginResponse.data.token);

                navigate("/");
            }
        } catch (err) {
            console.log(err);
            const response = err.response.data;

            setErrorResponse({
                isError: true,
                message: response.message,
            });
        }
    };


    return (
        <Container fluid="true">
            <Row >
                <Col>
                    <img src={PICT1} alt="Girl in a jacket" width="720px" height="950px" />
                </Col>
                <Col className="justify-content-md-center">
                    <div className="formlogin">
                    <h1 className="mb-3">Masuk</h1>
                    <Form onSubmit={onLogin}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                ref={emailField}
                                placeholder="Masukkan Email"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                ref={passwordField}
                                placeholder="Masukkan Password"
                            />
                        </Form.Group>
                        {errorResponse.isError && (
                            <Alert variant="danger">{errorResponse.message}</Alert>
                        )}
                        <Button className="w-100" type="submit">
                            Masuk
                        </Button>
                        <p>
                            Belum punya akun?  <Link to="/register">Daftar di sini</Link>
                        </p>
                    </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
