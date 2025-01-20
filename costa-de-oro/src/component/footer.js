import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Acerca de nosotros</h5>
            <p>Breve descripción de tu empresa o proyecto.</p>
          </Col>
          <Col md={4}>
            <h5>Enlaces rápidos</h5>
            <ul>
              <li><a href="/nosotros">Inicio</a></li>
              <li><a href="/productos">Productos</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Síguenos</h5>
            <ul className="social-icons">
              <li><a href="/nosotros">La Comunidad<i className="fab fa-facebook-f"></i></a></li>
              <li><a href="/nosotros">La Comunidad<i className="fab fa-twitter"></i></a></li>
              <li><a href="/nosotros">La Comunidad<i className="fab fa-instagram"></i></a></li>
            </ul>
          </Col>
        </Row>
        <hr />
        <p className="text-center">© {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
};

export default Footer;