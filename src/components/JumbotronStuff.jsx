import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import gradient from './JumbotronStuff/gradient.jpeg';
import logo from './JumbotronStuff/logo.gif';
import { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { ImgOverlay } from 'image-overlay-react'
import 'image-overlay-react/dist/index.css'
import CardGroup from 'react-bootstrap/CardGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Nav from 'react-bootstrap/Nav';
import { fontWeight } from '@mui/system';


export default function JumbotronStuff() {
  return (
    <Container className="my-5" >
    {/* Card: about us */}
    <Row style={{ marginTop: 0, marginBottom: 0 }}>
        <Card className="text-bottom" text={'black'} style={{ padding: 0 }}>
            <Card.Body>
            <Card.Img variant="top" src={logo} />
            <Card.ImgOverlay>
            <span style={{ fontSize: 80, fontWeight: 600}}>METASECURE</span>
            <Card.Text >
            <span style={{ fontSize: 20, fontWeight: 400}}>
            Building a Trustworthy Web3 World
            METASECURE</span>
            </Card.Text>
            <Button variant="primary">Explore span<span>&#8595;</span></Button>
            </Card.ImgOverlay>
            </Card.Body>
        </Card>
    </Row>
</Container>
);
}
