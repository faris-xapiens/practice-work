import {
  decCounter,
  incCounter,
  resetCounter,
} from "../redux/actions/counterAction";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import MainMenu from "../layout/MainMenu";

const ReduxComponent = () => {
  const dispatch = useDispatch();
  const currCount = useSelector((state) => state.counter);
  const { count } = currCount;
  return (
    <MainMenu>
      <div className="app-container">
        <div className="parent">
          <div className="child">
            <div className="button-one">
              <button
                onClick={() => dispatch(decCounter())}
                disabled={count === 0 ? true : false}
              >
                -
              </button>
              <p>{count}</p>
              <button onClick={() => dispatch(incCounter())}>+</button>
            </div>
            <div className="button-two">
              <button onClick={() => dispatch(resetCounter())}>RESET</button>
            </div>
          </div>
        </div>
      </div>
    </MainMenu>
  );
};

export default ReduxComponent;
