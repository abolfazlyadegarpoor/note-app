const CounterTwo = (props) => {
  return (
    <div>
      <h1>Counter #2</h1>
      <p>{props.count}</p>
      {props.incrementHandler && (
        <button onClick={props.incrementHandler}>Increment</button>
      )}
      {props.decrementHandler && (
        <button onClick={props.decrementHandler}>Decrement</button>
      )}
    </div>
  );
};

export default CounterTwo;
