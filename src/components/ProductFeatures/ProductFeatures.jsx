import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import risksImg from './images/risks.png';
import dragFileImg from './images/dragFile.png';
import vulnerabilitiesImg from './images/vulnerabilities.png';
import detectionImg from './images/detection.png';
import "./ProductFeatures.css";

export default function ProductFeatures() {
    return (
        // The Product Features Section
        <Container className="my-5" style={{ paddingTop: 136 }} id="productFeatures">
            <Row className="my-3">
                <Col>
                    <div>
                        <h3 className="my-3">
                            Automatic detection of smart contracts {' '}
                        </h3>
                        <h6 style={{ paddingTop: 24, paddingBottom: 24 }}>
                            Automate the security detection of your smart contract code, identify vulnerabilities and help developers locate vulnerable code and repair code.
                        </h6>
                    </div>
                </Col>
            </Row>
            <Row className="my-3" style={{ paddingTop: 24 }}>
                <Figure className="text-center">
                    <Figure.Image
                        alt="risksImg"
                        src={risksImg}
                    />
                </Figure>
            </Row>
            <Row className="my-3" style={{ paddingTop: 120 }}>
                <Col className="text-center"><Figure>
                    <Figure.Image
                        alt="dragFileImg"
                        src={dragFileImg}
                        className="imgsize"

                    />
                    <p style={{ marginTop: 40, marginBottom: 10 }}>Convenient code upload method</p>
                    <Figure.Caption>
                        Upload code file for code analysis
                    </Figure.Caption>
                </Figure></Col>
                <Col className="text-center"><Figure>
                    <Figure.Image
                        alt="vulnerabilitiesImg"
                        src={vulnerabilitiesImg}
                        className="imgsize"
                    />
                    <p style={{ marginTop: 40, marginBottom: 10 }}>Complete analysis reports</p>
                    <Figure.Caption>
                        Output all detection results, including vulnerability code localization
                    </Figure.Caption>
                </Figure></Col>
                <Col className="text-center"><Figure>
                    <Figure.Image
                        alt="detectionImg"
                        src={detectionImg}
                        className="imgsize"
                    />
                    <p style={{ marginTop: 40, marginBottom: 10 }}>Complete detection capability</p>
                    <Figure.Caption>
                        Cover most of the smart contract SWC vulnerabilities
                    </Figure.Caption>
                </Figure></Col>
            </Row>
            {/* Form */}
            <Row className="my-3">
                <Col className="text-center" style={{ marginTop: 100 }}>
                    <Button variant="white"><span style={{ fontSize: 30 }}>👉🏻 </span> Click here to apply for a trial <span style={{ fontSize: 30 }}> 👈🏻</span></Button>{' '}
                </Col>
            </Row>
            {/* Card: about us */}
            <Row style={{ marginTop: 220, marginBottom: 220 }}>
                <Card className="rounded" text={'white'} style={{ backgroundColor: '#182D43', padding: 50 }}>
                    <Card.Body>
                        <Card.Title>About us</Card.Title>
                        <Card.Text>
                            " MataSecureLabs.io is founded by a top-notch team with widee background including crypto, cyber-security, economics, finance&risk control, cloud software architect, and senior marketing veterans. "
                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted">Based on the concept of continuous security threat and risk assessment (CARTA), it focuses on providing data-driven security and trust measurement service for web3 projects, namely Trustworthy as a Service (TaaS). MetaSecureLabs.io, provides continuous and accurate security threat and risk assessment mechanisms in different application scenarios (e.g.,Smart contract, NFT, Protocol, Tokenomics of web3 systems and projects) . We believe that a trustworthy understanding of project semantic (code logic), core data flows (e.g., token txn) and the tokenomic incentive models are the key to help build a true valuable world of stable and secure web3 systems</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
}
