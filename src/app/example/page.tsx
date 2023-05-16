"use client";
import { ChangeEvent, useState } from "react";

export default function Example() {
  const [input, setInput] = useState("");
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    const params = new URLSearchParams({ input });
    fetch(`/api/example?${params}`)
      .then((res) => res.json())
      .then((data) => {
        setText(data.text);
      });
  };

  return (
    <div>
      <h1>Example</h1>
      <div>
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Click me</button>
      </div>
      <div>text: {text}</div>
    </div>
  );
}
