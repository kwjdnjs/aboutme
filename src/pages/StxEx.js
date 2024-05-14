import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function StxEx() {
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  function onKeyDown(event) {
    if (event.key === "Enter") {
      const inputValue = event.target.value;

      navigate("/stxex/" + inputValue);
    }
  }

  return (
    <>
      <Form.Control type="text" placeholder="input" onKeyDown={onKeyDown} />
    </>
  );
}

export default StxEx;
