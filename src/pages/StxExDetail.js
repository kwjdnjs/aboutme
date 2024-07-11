import { useParams } from "react-router-dom";
import TxList from "../components/TxList";
import { Container, Row } from "react-bootstrap";
import SearchBox from "../components/SearchBox";

function StxExDetail() {
  const { address } = useParams(null);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <SearchBox address={address} />
      </Row>
      <Row className="justify-content-md-center">
        <TxList address={address} />
      </Row>
    </Container>
  );
}

export default StxExDetail;
