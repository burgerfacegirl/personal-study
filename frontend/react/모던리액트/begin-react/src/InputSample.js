import React from "react";
import { useState } from "react";

function InputSample() {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onReset = () => {
    setText("");
  };
  return (
    <div>
      <input onChange={onChange} value={text}></input>
      <button onClick={onReset}>초기화</button>
      <h2>작성 내용: {text}</h2>
    </div>
  );
}

export default InputSample;
