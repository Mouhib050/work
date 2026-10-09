import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Card } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#">Mon App React-Bootstrap</Navbar.Brand>
          </Container>
        </Navbar>

        <Container className="mt-4">
          <h1 className="mb-4">
            Bienvenue dans mon application React avec React-Bootstrap
          </h1>

          <div className="d-flex gap-4">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Carte 1</Card.Title>
                <Card.Text>Contenu de la première carte.</Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Carte 2</Card.Title>
                <Card.Text>Contenu de la deuxième carte.</Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Carte 3</Card.Title>
                <Card.Text>Contenu de la troisième carte.</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
