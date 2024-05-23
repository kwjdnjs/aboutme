import { useParams } from "react-router-dom";
import TxList from "../components/TxList";
import { Container } from "react-bootstrap";
import SearchBox from "../components/SearchBox";

function StxExDetail() {
  const { address } = useParams(null);

  return (
    <Container>
      <SearchBox address={address} />
      <TxList address={address} />
    </Container>
  );
}

export default StxExDetail;
