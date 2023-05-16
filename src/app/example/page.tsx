"use client";
import { ChangeEvent, useState } from "react";

export default function Example() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState<{ text: string; key: string }>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    const params = new URLSearchParams({ input });
    fetch(`/api/example?${params}`)
      .then((res) => res.json())
      .then((data) => {
        setResponse(data);
      });
  };

  return (
    <div>
      <h1>Example</h1>
      <div>
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Click me</button>
      </div>
      {response && (
        <div>
          <div>YourInput: {response.text}</div>
          <div>ApiKey: {response.key}</div>
        </div>
      )}
    </div>
  );
}
