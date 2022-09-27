import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from './MiddleStuffImage/image1.png';
import img2 from './MiddleStuffImage/image2.png';
import img3 from './MiddleStuffImage/image3.png';
import img4 from './MiddleStuffImage/image4.png';

export default function MiddleStuff() {
    return (
        <Container className="my-5" >
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
            <Row className="my-3">
                <Figure className="text-center">
                    <Figure.Image
                        alt="img1"
                        src={img1}
                    />
                </Figure>
            </Row>
            <Row className="my-3">
                <Col className="text-center"><Figure>
                    <Figure.Image
                        alt="img1"
                        src={img2}
                        className="border border-dark rounded"
                        
                    />
                    <p>Convenient code upload method</p>
                    <Figure.Caption>
                        Upload code file for code analysis
                    </Figure.Caption>
                </Figure></Col>
                <Col className="text-center"><Figure>
                    <Figure.Image
                        alt="img1"
                        src={img3}
                        className="border border-dark rounded"
                    />
                    <p>Complete analysis reports</p>
                    <Figure.Caption>
                        Output all detection results, including vulnerability code localization
                    </Figure.Caption>
                </Figure></Col>
                <Col className="text-center"><Figure>
                    <Figure.Image
                        alt="img1"
                        src={img4}
                        className="border border-dark rounded"
                    />
                    <p>Complete detection capability</p>
                    <Figure.Caption>
                        Cover most of the smart contract SWC vulnerabilities
                    </Figure.Caption>
                </Figure></Col>
            </Row>
            {/* Form */}
            <Row className="my-3">
                <Col className="text-center" style={{ marginTop: 100}}>
                    <Button variant="white"><span style={{ fontSize: 30 }}>👉🏻 </span> Click here to apply for a trial <span style={{ fontSize: 30 }}> 👈🏻</span></Button>{' '}
                </Col>
            </Row>
            {/* Card: about us */}
            <Row style={{ marginTop: 220, marginBottom: 220 }}>
                <Card className="rounded" text={'white'} style={{ backgroundColor: '#1F364E', padding: 50 }}>
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
