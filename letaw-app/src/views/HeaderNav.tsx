import {Container, Nav, Navbar} from "react-bootstrap";

export const HeaderNav = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">David Letaw</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/portfolio">
            <span className="material-symbols-outlined">
              work
            </span>
             Portfolio
          </Nav.Link>
          <Nav.Link href="/notes">
            <span className="material-symbols-outlined">
              person_add</span>
             Connect
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}