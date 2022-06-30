import React from "react";
import { Container, Button, Row, Col, Card, Image } from "react-bootstrap";
import '../infoSeller/infoSeller.css';
import { SiWhatsapp } from "react-icons/si";
import PRODUCTIMG from '../../../images/logo.png'

export function InfoSellerHome() {

    return (
    <Container>
        <Card className="card-seller">
            <div className="row">
                <div className="col-sm-2">
                <Card.Img variant="top" src="/images/home-carousel-1.png"/>
                </div>
                <div className="col">
                <Card.Body>
                    <div className="row">
                    <h3>Nama Penjual</h3>
                    </div>
                    <div className="row">
                    <p>$30</p>
                    </div>
                </Card.Body>
                </div>
            </div>
        </Card>
        <div className="me-9">
        </div>
        <div className="row-2">
            <h4>Daftar Produkmu yang Ditawar</h4>
        </div>
        <Card className="card-seller2">
            <div className="row">
                <div className="col-sm-2">
                <Card.Img variant="top" src={PRODUCTIMG}/>
                </div>
                <div className="col-md-4">
                    <p> Penawaran Produk </p>
                    <h6> Jam Tangan Casio</h6>
                    <h6> Rp. 250,000</h6>
                    <h6> Ditawar Rp. 200,000</h6>
                </div>
                <div className="col-sm-2">

                </div>
                <div className="col-sm-2">

                </div>
                <div className="col-md-2">
                    <p>30 Juni 2022</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">

                </div>
                <div className="col-md-2">

                </div>
                <div className="col-md-2">

                </div>
                <div className="col-md-2">

                </div>
                <div className="col-md-2">
                <Button variant="outline-info" className="button-info"> Status </Button>{' '}
                </div>
                <div className="col-md-2">
                <Button variant="success" className="button-register">
                                            <SiWhatsapp className="icon-register" />
                                            Hubungi
                                        </Button>
                </div>

            </div>
        </Card>
            
        </Container>

        
    );
}