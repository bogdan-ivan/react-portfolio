import React, { useRef, useState } from "react";

interface Person {
  n1: string;
  n2: string;
}

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;
  obj?: {
    f1: string;
  };
  pers?: Person;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
  text: string;
}

const TextField: React.FC<Props> = ({ text, ok, handleChange }) => {
  const [count, setCount] = useState<number | null>(5);
  const [title, setTitle] = useState<TextNode>({ text: "yes" });

  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  if (count === null) {
    setCount(null);
  }

  return (
    <div ref={divRef}>
      <h1>{text}</h1>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  );
};

export default TextField;
