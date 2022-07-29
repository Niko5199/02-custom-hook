import useCounter from "../hooks/useCounter";

const Counter = () => {
  const { value, handleIncrement, handleDecrement } = useCounter();
  return (
    <div>
      <h1>Counter</h1>
      <div>
        <p>{value}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Restar</button>
      </div>
    </div>
  );
};

export default Counter;
