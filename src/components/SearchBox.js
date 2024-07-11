import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SearchBox({ address }) {
  const [value, setValue] = useState(address);
  const navigate = useNavigate();

  // Enter키 페이지 이동
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      navigate("/stxex/" + value);
    }
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <Form.Control
      className="mt-4"
      type="text"
      placeholder="주소를 입력해주세요"
      value={value}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      style={{ width: "50rem" }}
    />
  );
}

export default SearchBox;
