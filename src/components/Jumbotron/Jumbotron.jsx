import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import logo from '../../resources/Common/logo.png';

export default function Jumbotron() {
    return (
        <Container>
            <Row>
                <Col xs={6} style={{ margin: 'auto', padding: "0" }}>
                    <h1>Metasecure</h1>
                    <p>Building a better web3 world</p>
                    <Button>Explore</Button>
                </Col>
                <Col xs={6} style={{ textAlign: 'center', margin: 'auto', height: '100%', padding: "5%" }}>
                    <img src={logo} alt='logo' height="75%" width="75%"></img>
                </Col>
            </Row>
        </Container>
    );
}