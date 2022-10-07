import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from './JumbotronStuff/logo.gif';
import gradient from './JumbotronStuff/gradient.jpeg';
import 'image-overlay-react/dist/index.css'
import Box from '@mui/material/Box';

const PositionLayout = () => {
 

  return (
    <Container className="my-5" >
    {/* Card: about us */}
    <Row style={{ marginTop: 0, marginBottom: 0 }}>
        <Card className="text-bottom" text={'black'} style={{ padding: 0 }}>
            <Card.Body>
        <View style={[styles.box1,]}/>
        <View style={[styles.box2,]}/>
        <View style={[styles.box3,]}/>
            <Card.Img variant="top" src={gradient} />
            </Card.Body>
        </Card>
    </Row>
</Container>
);
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
    minHeight: 200,
  },
  box1: {
    width: 300,
    height: 100,
    top: 250,
    left: 150,
    position: "absolute",
    backgroundColor: "white",
    
  },
  box2: {
    width: 300,
    height: 100,
    top: 300,
    left: 150,
    position: "absolute",
    backgroundColor: "red",
  },
  box3: {
    width: 300,
    height: 300,
    top: 180,
    left: 800,
    position: "absolute",
    backgroundColor: "black",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default PositionLayout;