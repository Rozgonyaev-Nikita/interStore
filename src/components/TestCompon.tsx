import React, { ChangeEventHandler } from "react";

interface ICompon {
  onChange: (s: string) => void;
  value: string;
}

const TestCompon = () => {
  const [text, setText] = React.useState<string>("");

  const handleInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <p>TestCompon</p>
      <input
        type="text"
        value={text}
        data-testid="inptest"
        onChange={handleInput}
      />
      <button
        data-testid="clearButton"
        onClick={() => setText("Это успех нахой")}
      >
        Очистить
      </button>
    </div>
  );
};

export default TestCompon;
