import React from 'react'
import "./Team.css"
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import byteDanceLogo from '../../resources/TeamLogos/byteDanceLogo.png'
import cornellLogo from '../../resources/TeamLogos/cornellLogo.png'
import fireEyeLogo from '../../resources/TeamLogos/fireEyeLogo.png'
import googleLogo from '../../resources/TeamLogos/googleLogo.png'
import ibmLogo from '../../resources/TeamLogos/ibmLogo.png'
import illinoisLogo from '../../resources/TeamLogos/illinoisLogo.png'
import jpMorganLogo from '../../resources/TeamLogos/jpMorganLogo.png'
import microsoftLogo from '../../resources/TeamLogos/microsoftLogo.png'
import paloLogo from '../../resources/TeamLogos/paloLogo.png'
import pennLogo from '../../resources/TeamLogos/pennLogo.png'
import stanfordLogo from '../../resources/TeamLogos/stanfordLogo.png'
import vmLogo from '../../resources/TeamLogos/vmLogo.png'
import washingtonLogo from '../../resources/TeamLogos/washingtonLogo.png'
import wisconsinLogo from '../../resources/TeamLogos/wisconsinLogo.png'

export default function Team() {
    return (
        <Container className='my-5' id="team">
            <Row>
                <h3 className='header'>Investors &#38; Partners</h3>
            </Row>
            <Row>
                <h6 style={{ paddingTop: 24, paddingBottom: 24 }}>
                    MetaSecureLabs: a team from reputable Research Institutes, Security Vendors and Web2                </h6>
            </Row>
            <Row className='my-5'>
                <Col >
                    <a href="https://www.algorand.foundation/" target="_blank" rel="noopener noreferrer">
                        <div className='d-flex align-items-center justify-content-center border logoContainer'>
                            <img className="partnerLogos" alt="" src={googleLogo} height='1em' />
                        </div>
                    </a>
                </Col>
                <Col >
                    <a href="https://ethz-foundation.ch/en/" target="_blank" rel="noopener noreferrer">
                        <div className='d-flex align-items-center justify-content-center border logoContainer'>
                            <img className="mx-auto partnerLogos" alt="" src={microsoftLogo} />
                        </div>
                    </a>
                </Col>
                <Col >
                    <a href="https://polkadot.network/" target="_blank" rel="noopener noreferrer">
                        <div className='d-flex align-items-center justify-content-center border logoContainer'>
                            <img className="partnerLogos" alt="" src={ibmLogo} />
                        </div>
                    </a>
                </Col>
                <Col >
                    <a href="https://polkadot.network/" target="_blank" rel="noopener noreferrer">
                        <div className='d-flex align-items-center justify-content-center border logoContainer'>
                            <img className="partnerLogos" alt="" src={pennLogo} />
                        </div>
                    </a>
                </Col>
                <Col >
                    <a href="https://polkadot.network/" target="_blank" rel="noopener noreferrer">
                        <div className='d-flex align-items-center justify-content-center border logoContainer'>
                            <img className="partnerLogos" alt="" src={paloLogo} />
                        </div>
                    </a>
                </Col>
            </Row>
            <Row className='my-5'>
                <Col >
                    <a href="https://www.algorand.foundation/" target="_blank" rel="noopener noreferrer">
                        <div className='d-flex align-items-center justify-content-center border logoContainer'>
                            <img className="partnerLogos" alt="" src={fireEyeLogo} />
                        </div>
                    </a>
                </Col>
                <Col >
                    <a href="https://ethz-foundation.ch/en/" target="_blank" rel="noopener noreferrer">
                        <div className='d-flex align-items-center justify-content-center border logoContainer'>
                            <img className="mx-auto partnerLogos" alt="" src={jpMorganLogo} />
                        </div>
                    </a>
                </Col>
                <Col >
                    <a href="https://polkadot.network/" target="_blank" rel="noopener noreferrer">
                        <div className='d-flex align-items-center justify-content-center border logoContainer'>
                            <img className="partnerLogos" alt="" src={byteDanceLogo} />
                        </div>
                    </a>
                </Col>
                <Col >
                    <a href="https://polkadot.network/" target="_blank" rel="noopener noreferrer">
                        <div className='d-flex align-items-center justify-content-center border logoContainer'>
                            <img className="partnerLogos" alt="" src={illinoisLogo} />
                        </div>
                    </a>
                </Col>
            </Row>
            <Row className='my-5'>
                <Col >
                    <a href="https://www.algorand.foundation/" target="_blank" rel="noopener noreferrer">
                        <div className='d-flex align-items-center justify-content-center border logoContainer'>
                            <img className="partnerLogos" alt="" src={vmLogo} />
                        </div>
                    </a>
                </Col>
                <Col >
                    <a href="https://ethz-foundation.ch/en/" target="_blank" rel="noopener noreferrer">
                        <div className='d-flex align-items-center justify-content-center border logoContainer'>
                            <img className="mx-auto partnerLogos" alt="" src={stanfordLogo} />
                        </div>
                    </a>
                </Col>
                <Col >
                    <a href="https://polkadot.network/" target="_blank" rel="noopener noreferrer">
                        <div className='d-flex align-items-center justify-content-center border logoContainer'>
                            <img className="partnerLogos" alt="" src={washingtonLogo} />
                        </div>
                    </a>
                </Col>
                <Col >
                    <a href="https://polkadot.network/" target="_blank" rel="noopener noreferrer">
                        <div className='d-flex align-items-center justify-content-center border logoContainer'>
                            <img className="partnerLogos" alt="" src={cornellLogo} />
                        </div>
                    </a>
                </Col>
                <Col >
                    <a href="https://polkadot.network/" target="_blank" rel="noopener noreferrer">
                        <div className='d-flex align-items-center justify-content-center border logoContainer'>
                            <img className="partnerLogos" alt="" src={wisconsinLogo} />
                        </div>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}