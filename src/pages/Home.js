import './../styles/common.css';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <>
      <Container className="my-5">
        <Row className="justify-content-md-center">
          <Col md="auto" className="text-center">
            <h1>About Me</h1>
            <h2>나를 나타내는 방법</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
