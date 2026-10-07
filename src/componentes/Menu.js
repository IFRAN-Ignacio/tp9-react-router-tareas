import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

// Barra de navegación (se cierra sola en el celular al elegir una opción)
function Menu() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="sm" collapseOnSelect>
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Lista de tareas
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-principal" />
        <Navbar.Collapse id="menu-principal">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end eventKey="inicio">
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/nueva" eventKey="nueva">
              Nueva tarea
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
