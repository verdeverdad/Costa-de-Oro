import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import portada from '../img/tuLugar.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function Menu() {
  return (
    <><div className="img-container m-0"><a href="/">
      <img src={portada} alt="imagen de atardecer" width="100%" /></a>
    </div>
      <Navbar expand="xl" className="bg-body-tertiary">

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-5">
            <Nav.Link href="/nosotros">La Comunidad</Nav.Link>
            <Nav.Link href="/cultura">Cultura</Nav.Link>
            <Nav.Link href="/educacion">Educación</Nav.Link>
            <Nav.Link href="/ventas">Mercado</Nav.Link>
            <Nav.Link href="/trueques">Trueques</Nav.Link>
            <Nav.Link href="/gratiferia">Gratiferia</Nav.Link>
            <Nav.Link href="/servicios">Servicios</Nav.Link>
            <Nav.Link href="/trabajos">Trabajos</Nav.Link>
            <Nav.Link href="/viajes">Viajes</Nav.Link>
            <Nav.Link href="/animales">Mascotas</Nav.Link>
            <Nav.Link href="/perfil">Mi perfil</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar> </>
  );
}

export default Menu;