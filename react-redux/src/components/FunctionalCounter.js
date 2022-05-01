import { useSelector, useDispatch } from "react-redux";

function FunctionalCounter() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  const decrement = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  const customIncrement = () => {
    dispatch({
      type: "INCREMENT",
      payload: 10,
    });
  };

  return (
    <div>
      <h1>Functional Component Counter</h1>
      <h1 id="counter">{state.counter}</h1>
      <button id="decrement" onClick={decrement}>
        -
      </button>
      <button id="increment" onClick={increment}>
        +
      </button>
      <button id="decrement" onClick={customIncrement}>
        +10
      </button>
    </div>
  );
}

export default FunctionalCounter;
