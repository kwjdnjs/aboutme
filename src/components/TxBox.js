import { Card, Row } from "react-bootstrap";

function TxBox({ stxReceived, stxSent, txId, txType }) {
  return (
    <Row className="justify-content-md-center">
      <Card className="mt-4" style={{ width: "50rem" }}>
        <Card.Header>{txId}</Card.Header>
        <Card.Body>
          <Card.Title>{txType}</Card.Title>
          <Card.Text>
            {stxReceived}
            <br />
            {stxSent}
          </Card.Text>
        </Card.Body>
      </Card>
    </Row>
  );
}

export default TxBox;
