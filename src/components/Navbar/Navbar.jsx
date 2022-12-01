import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './logo.jpg';

function Nav_bar() {
  return (
    <Navbar id="navbar" bg="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(233,233,255,1) 0%, rgba(0,212,255,1) 100%);" expand="lg">
      <Container>
        <br />
        <Navbar bg="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(233,233,255,1) 0%, rgba(0,212,255,1) 100%)" variant="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(233,233,255,1) 0%, rgba(0,212,255,1) 100%)">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            {' '}
            <span style={{ marginLeft: '0.5rem' }}></span>
            <span style={{ fontWeight: 'bold' }}>METASECURE</span>
            <span style={{ marginLeft: '35rem' }}></span>
          </Container>
        </Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Products</Nav.Link>
            <NavDropdown title="Teams" id="teams-dropdown">
              <NavDropdown.Item href="#action/3.1" id="our-mission">our-mission</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" id="team-background">
                team-background
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" id="investors">investors</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resource" id="resource-dropdown">
              <NavDropdown.Item href="#action/3.1" id="twitter">Twitter</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" id="telegram">
                Telegram
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" id="email">Email</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav_bar;