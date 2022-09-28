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


export default function JumbotronStuff() {
  return (
    <Card className="bg-{gradient} text-white">
    <Card.Img align="center" width="1200" height="600" src = {gradient} alt = "gradient" />
    </Card>
  )
}
