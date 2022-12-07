import './App.css';
// import '@trimbleinc/modus-react-bootstrap/css/dist/modus-react-bootstrap.min.css';
import '@trimbleinc/modus-react-bootstrap/css/dist/modus-react-bootstrap-dark.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div>
      <Navbar>
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login"> Amjed Kamoun</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <div class="position">
        <Form>
          <Row>
            <Col>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" />
            </Col>
          </Row>
        </Form>
      </div>
      <div class="position">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
          Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
