function TxBox({ stxReceived, stxSent, txId, txType }) {
  return (
    <div>
      <p>{stxReceived}</p>
      <p>{stxSent}</p>
      <p>{txId}</p>
      <p>{txType}</p>
      <br />
    </div>
  );
}

export default TxBox;
