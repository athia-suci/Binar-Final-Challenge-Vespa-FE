import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Nav, Navbar, Form, Container, Alert, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { selectUser } from "../slices/userSlice";
import { FiCamera, FiArrowLeft } from "react-icons/fi";
import { Bearer } from '@bearer/react'
import axios from "axios";
import "../css/style.css";


export default function Profile() {
    const navigate = useNavigate();
    const userRedux = useSelector(selectUser);
    const [user] = useState(userRedux.creds);
    const titleField = useRef("");
    const descriptionField = useRef("");
    const [pictureField, setPictureField] = useState();

    const [errorResponse, setErrorResponse] = useState({
        isError: false,
        message: "",
    });

    const onCreate = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");
            const postPayload = new FormData();
            postPayload.append("title", titleField.current.value);
            postPayload.append("description", descriptionField.current.value);
            postPayload.append("picture", pictureField);


            const createRequest = await axios.post(
                "http://localhost:2000/v1/users/:id",
                postPayload,
                {
                    headers: {
                        Authorization: Bearer `${ token }`, "Content-Type": "multipart/form-data",
                    },
                }
            );

            const createResponse = createRequest.data;

            if (createResponse.status) navigate("/profile");
        } catch (err) {
            const response = err.response.data;

            setErrorResponse({
                isError: true,
                message: response.message,
            });
        }
    };

    const styleLabel = {
        borderRadius: '10px',
    };

    const styleLink = {
        textDecoration: 'none',
        color: '#7126B5',
        fontWeight: 'bold',
    }

return (
    <div>
        {/* navbar */}
        <div className="na1 py-4 shadow">
            <nav className="navbar navbar-expand-lg navbar-light bg-all">
                <Link to="/">
                    <button
                        className="navbar-brand box"
                        style={{ marginLeft: "160px" }}
                    ></button>
                </Link>
                <Navbar.Brand href="#" className="brand" />
                <div className="offcanvas-body" id="offcanvasRight">
                    <div className="navbar">
                        <Nav
                            className="text-dark"
                            style={{ marginLeft: "290px", fontWeight: "bold" }}
                        >
                            {" "}
                            Lengkapi Info Akun{" "}
                        </Nav>
                    </div>
                </div>
            </nav>
        </div>
        {/* <p>Selamat datang {user.name}</p> */}
        <Container className="my-5 w-50">
            {/* <h1 className="mb-3 text-center">Create Akun</h1> */}
            <h3>
                <Link to="/" style={{ color: "black" }}>
                    <FiArrowLeft />
                </Link>
            </h3>
            <Form onSubmit={onCreate}>
                <button className="mb-3 box1">
                    <h2>
                        <FiCamera
                            className="camera"
                            onChange={(e) => setPictureField(e.target.files[0])}
                        />
                    </h2>
                </button>
                <Form className="border1 mb-3">
                    <Form.Label>Nama*</Form.Label>
                    <Form.Control 
                    type="text" 
                    ref={titleField} 
                    placeholder="Nama" 
                    style={styleLabel}/>
                </Form>
                <Form.Group className="mb-3">
                    <Form.Label>Kota*</Form.Label>
                    <select ref={descriptionField} className="form-select" style={styleLabel}>
                        <option hidden>Pilih Kota</option>
                        <option value="Jakarta">Jakarta</option>
                        <option value="JawaTengah">Jawa Tengah</option>
                        <option value="JawaTimur">Jawa Timur</option>
                        <option value="JawaBarat">Jawa Barat</option>
                        <option value="KalimantanTengah">Kalimantan Tengah</option>
                        <option value="KalimantanTimur">Kalimantan Timur</option>
                        <option value="KalimantanSelatan">Kalimantan Selatan</option>
                        <option value="KalimantanBarat">Kalimantan Barat</option>
                    </select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Alamat*</Form.Label>
                    <Form.Control
                        type="text"
                        ref={descriptionField}
                        placeholder="Contoh: Jalan Ikan Hiu 33"
                        as="textarea"
                        rows={3}
                        style={styleLabel}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>No Handphone*</Form.Label>
                    <Form.Control
                        type="text"
                        ref={descriptionField}
                        placeholder="contoh: +628123456789"
                        style={styleLabel}
                    />
                </Form.Group>
                {errorResponse.isError && (
                    <Alert variant="danger">{errorResponse.message}</Alert>
                )}
                <Button className="myButton w-100" type="submit" style={styleLabel}>
                    Simpan
                </Button>
            </Form>
        </Container>
    </div >
);
}