import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Información de Contacto</h5>
            <p>Dirección: 123 Calle Principal</p>
            <p>Teléfono: (123) 456-7890</p>
            <p>Correo Electrónico: info@example.com</p>
          </Col>
          <Col md={6}>
            <h5>Enlaces Rápidos</h5>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/acerca">Acerca de Nosotros</a></li>
              <li><a href="/servicios">Servicios</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3">
        &copy; {new Date().getFullYear()} Tu Nombre o Nombre de la Empresa
      </div>
    </footer>

  )
}

export default Footer