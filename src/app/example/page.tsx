"use client";
import { useState } from "react";

export default function Example() {
  const [text, setText] = useState("");

  const handleClick = () => {
    fetch("/api/example")
      .then((res) => res.json())
      .then((data) => {
        setText(data.text);
      });
  };

  return (
    <div>
      <h1>Example</h1>
      <button onClick={handleClick}>Click me</button>
      <div>{text}</div>
    </div>
  );
}
