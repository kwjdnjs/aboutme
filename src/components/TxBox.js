import { useState } from "react";
import { Card, Row } from "react-bootstrap";

function TxBox({ stxReceived, stxSent, txId, txType }) {
  let borderColor = "light";
  let cardText = null;

  // 트랜잭션 종류 구분
  switch (txType) {
    case "token_transfer":
      borderColor = "primary";
      cardText = (
        <Card.Text>
          Receivied: {stxReceived}
          <br />
          Sent: {stxSent}
        </Card.Text>
      );
      break;
    case "smart_contract":
      borderColor = "success";
      break;
    case "contract_call":
      borderColor = "info";
      break;
    default:
      borderColor = "light";
  }

  return (
    <Row className="justify-content-md-center">
      <Card border={borderColor} className="mt-4" style={{ width: "50rem" }}>
        <Card.Header>{txId}</Card.Header>
        <Card.Body>
          <Card.Title>{txType}</Card.Title>
          {cardText}
        </Card.Body>
      </Card>
    </Row>
  );
}

export default TxBox;
