import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './Menu.css';

const Menu = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img src={ Logo } alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to='/'>Home</Link>
            <Link to='/product'>Product</Link>
            <Link to='/template'>Template</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/pricing'>Pricing</Link>
          </Nav>
          <div className="menu-button">
            <Link>Sign in</Link>
            <Link>Start free</Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Menu