import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import TxBox from "./TxBox";

function TxList({ address }) {
  const [txList, setTxList] = useState([]);

  // Get tx data from api server

  const url =
    "https://api.mainnet.hiro.so/extended/v2/addresses/" +
    address +
    "/transactions";

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: url,
    headers: {
      Accept: "application/json",
    },
  };

  const response = useAxios(config);

  // 목록 생성
  useEffect(() => {
    if (response) {
      const responseData = response["data"]["results"];
      const resultList = [];

      for (let i in responseData) {
        const data = responseData[i];
        const stxReceived = data["stx_received"];
        const stxSent = data["stx_sent"];
        const txId = data["tx"]["tx_id"];
        const txType = data["tx"]["tx_type"];

        resultList.push(
          <TxBox
            key={i}
            stxReceived={stxReceived}
            stxSent={stxSent}
            txId={txId}
            txType={txType}
          />
        );
      }

      setTxList(resultList);
    }
  }, [response]);

  return txList;
}

export default TxList;
