import "./../styles/common.css";
import { Container, Row, Col } from "react-bootstrap";

function HomeOld() {
  return (
    <>
      <Container fluid className="p-0 home-intro">
        <Container className="justify-content-md-left p-5">
          <Row md="auto" className="text-left">
            <Col>
              <h1>About Me</h1>
              <h2>나를 나타내는 방법</h2>
            </Col>
          </Row>
          <Row className="mt-4">
            <p>이 자리도 있습니다.</p>
            <p>이것은 테스트입니다.</p>
          </Row>
        </Container>
      </Container>
      <Container>
        <Row>
          <Col>
            <h1 className="mt-4">1.</h1>
            <h1 className="mt-4">2.</h1>
            <h1 className="mt-4">3.</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomeOld;
