import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function StxExDetail() {
  const { address } = useParams(null);
  const [responseData, setResponseData] = useState();
  const [txList, setTxList] = useState([]);

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

  useEffect(() => {
    axios
      .request(config)
      .then(function (response) {
        setResponseData(response["data"]["results"]);
      })
      .catch(function (error) {
        // 오류발생시 실행
      })
      .then(function () {
        // 항상 실행
      });
  }, []);

  useEffect(() => {
    if (responseData) {
      const result = [];

      for (let i in responseData) {
        const data = responseData[i];
        const stxReceived = data["stx_received"];
        const stxSent = data["stx_sent"];
        const txId = data["tx"]["tx_id"];
        const txType = data["tx"]["tx_type"];

        const txBlock = (
          <div key={i}>
            <p>{stxReceived}</p>
            <p>{stxSent}</p>
            <p>{txId}</p>
            <p>{txType}</p>
            <br />
          </div>
        );

        result.push(txBlock);
      }

      setTxList(result);
    }
  }, [responseData]);

  useEffect(() => {
    console.log(txList);
  }, [txList]);

  return <>{txList}</>;
}

export default StxExDetail;
