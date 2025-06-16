import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Table,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Principal(props)
{
    return (
      <div style={{ fontFamily: "'Orbitron', sans-serif", backgroundColor: "#0d1117", color: "#c9d1d9", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      
      {/* Fila 1: Barra de título */}
      <Navbar dark style={{ backgroundColor: "#161b22", borderBottom: "1px solid #30363d" }}>
        <NavbarBrand href="/" className="mx-auto" style={{ fontSize: "1.5rem" }}>
          🎬 Cinemateca Boliviana
        </NavbarBrand>
      </Navbar>

      {/* Fila 2: Menú */}
      <Nav pills className="justify-content-center py-3" style={{ backgroundColor: "#21262d" }}>
        <NavItem>
          <NavLink href="#" active style={{ backgroundColor: "#58a6ff", borderRadius: "10px" }}>
            Principal
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="text-light ms-3">
            Películas
          </NavLink>
        </NavItem>
      </Nav>

      {/* Fila 3: Contenido centrado */}
      <div style={{ flex: "1", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <Table dark bordered hover responsive className="text-center">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Fila 4: Footer */}
      <footer style={{ backgroundColor: "#161b22", borderTop: "1px solid #30363d", padding: "1rem 0" }}>
        <Container>
          <Row>
            <Col md="6" className="text-center text-md-start">
              <p className="mb-0">© 2025 Jordy A. Rodríguez Chacón</p>
            </Col>
            <Col md="6" className="text-center text-md-end">
              <p className="mb-0">Publicidad: Programación Web 2 🚀</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>

    );
}
export default Principal