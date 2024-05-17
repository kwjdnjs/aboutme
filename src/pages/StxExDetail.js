import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TxList from "../components/TxList";

function StxExDetail() {
  const { address } = useParams(null);

  return (
    <>
      <TxList address={address} />
    </>
  );
}

export default StxExDetail;
