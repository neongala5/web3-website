import React from 'react'
import "./Footer.css";
import logo from '../../resources/logo.png';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import twitterIcon from '../../resources/SocialMediaIcons/twitterIcon.png'
import mediumIcon from '../../resources/SocialMediaIcons/mediumIcon.png'

export default function Footer() {
  return (
    <div className="footer">
      <Container className='mainFooter'>
        <Row>
          <Col md={7} className='mt-2'>
            <img alt="" src={logo} width="30" height="30" />
            <h3 className="d-inline align-top"> METASECURE</h3>
            <p className='my-1'>Building a Trustworthy Web3 World</p>
          </Col>
          <Col md={3}>
            <h5>Follow Us</h5>
            <hr></hr>
            <Container>
              <Row>
                <Col>
                  <img alt="" src={twitterIcon} width="15" height="15" />
                  <span> Twitter</span>
                </Col>
                <Col>
                  <img className="align-baseline" alt="" src={mediumIcon} width="15" height="15" />
                  <span> Medium</span>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col md={2}>
            <h5>Language</h5>
            <hr></hr>
            <form>
              <select name="languages" id="languages" className='footerDropdown'>
                <option value="English">English</option>
                <option value="Italian">Italian</option>
                <option value="French">French</option>
              </select>
            </form>
          </Col>
        </Row>
      </Container>
      <div className='copyrightFooter'>
        <span className="copyright">
          Copyright <span style={{color: 'black'}}>&copy;</span> all rights reserved
        </span>
      </div>
    </div>
  )
}
