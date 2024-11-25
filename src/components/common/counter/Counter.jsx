import { useState } from "react";

const btnStyles = {
  padding: "10px 40px",
  backgroundColor: "steelblue",
  fontSize: "1.5rem",
  color: "white",
  border: "none",
  borderRadius: "8px",
};
const divStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
};
const Counter = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ ...divStyles, flexDirection: "column" }}>
      <div style={divStyles}>
        <button onClick={handleDecrement} style={btnStyles}>
          -
        </button>
        <h1>{count}</h1>
        <button onClick={handleIncrement} style={btnStyles}>
          +
        </button>
      </div>
      <button style={btnStyles}>Agregar al carrito</button>
    </div>
  );
};

export default Counter;
