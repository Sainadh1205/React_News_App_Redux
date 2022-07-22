import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBarComponent = () => {
  return (
    <Navbar collapseOnSelect fixed="top" expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
          as={NavLink}
          to="/"
          className="navbar-brand"
        >
          <img
            src="http://grin2b.com/wp-content/uploads/2017/01/Grin2B_icon_NEWS.png"
            width={25}
            height={25}
            alt="Brand-logo"
          />{" "}
          NewsApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={NavLink}
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
              to="/"
            >
              News
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact Us
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About Us
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">LogIn</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              SignUp
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
