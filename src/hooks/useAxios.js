import axios from "axios";
import { useEffect, useState } from "react";

function useAxios(config) {
  const [result, setResult] = useState();

  useEffect(() => {
    axios
      .request(config)
      .then(function (response) {
        // 응답을 받은 경우
        setResult(response);
      })
      .catch(function (error) {
        // 오류발생시 실행
      })
      .then(function () {
        // 모든 상황
      });
  }, []);

  return result;
}

export default useAxios;
