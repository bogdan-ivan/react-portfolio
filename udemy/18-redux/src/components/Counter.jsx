import classes from "./Counter.module.css";
import { useSelector, useStore, connect } from "react-redux";
import { useDispatch } from "react-redux";

import { counterActions } from "../store";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    //dispatch({ type: "increment" });
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    //dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    //dispatch({ type: "increase", amount: 5 });
    dispatch(counterActions.increase(10)); // {type: unique, payload: 10}
  };
  const toggleCounterHandler = () => {
    //dispatch({ type: "toggle"});
    dispatch(counterActions.toggle());
  };



  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter ? (<div className={classes.value}>{counter}</div>) : (<></>)}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
