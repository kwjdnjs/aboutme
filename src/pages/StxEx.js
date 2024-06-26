import { Container, Row } from "react-bootstrap";
import SearchBox from "../components/SearchBox";

function StxEx() {
  return (
    <Container>
      <Row className="justify-content-md-center mt-4">
        <h1 className="text-center">스택스 탐색기</h1>
        <h3 className="text-center">
          주소를 입력하여 해당 주소의 트랜잭션 내역을 볼 수 있습니다.
        </h3>
      </Row>
      <Row className="justify-content-md-center">
        <SearchBox address=""></SearchBox>
      </Row>
    </Container>
  );
}

export default StxEx;
