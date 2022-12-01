import React from 'react'
import "./Partners.css"
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import algorandLogo from '../../resources/PartnerLogos/algorandLogo.png'
import ethLogo from '../../resources/PartnerLogos/ethLogo.png'
import polkadotLogo from '../../resources/PartnerLogos/polkadotLogo.png'

export default function Partners() {
    return (
        <Container className='my-5' id="partners">
            <Row>
                <h3 className='header'>Investors &#38; Partners</h3>
            </Row>
            <Row className='my-5'>
                <Col>
                    <a href="https://www.algorand.foundation/" target="_blank" rel="noopener noreferrer">
                        <div className='d-flex align-items-center justify-content-center border logoContainer'>
                            <img className="partnerLogos" alt="" src={algorandLogo} />
                        </div>
                    </a>
                </Col>
                <Col >
                    <a href="https://ethz-foundation.ch/en/" target="_blank" rel="noopener noreferrer">
                        <div className='d-flex align-items-center justify-content-center border logoContainer'>
                            <img className="mx-auto partnerLogos" alt="" src={ethLogo} />
                        </div>
                    </a>
                </Col>

                <Col >
                    <a href="https://polkadot.network/" target="_blank" rel="noopener noreferrer">
                        <div className='d-flex align-items-center justify-content-center border logoContainer'>
                            <img className="partnerLogos" alt="" src={polkadotLogo} />
                        </div>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}