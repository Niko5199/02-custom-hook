import React, { useState } from "react";

/*
 * useCounter es un hook reutilizable
 */

export default function useCounter() {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleDecrement = () => {
    setValue((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
  };

  return {
    value,
    handleIncrement,
    handleDecrement,
  };
}
