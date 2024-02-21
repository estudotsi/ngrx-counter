import { Action, createReducer, on } from "@ngrx/store";
import * as fromCounterState from "../state/counter.state"
import * as fromCounterActions from "./counter.actions";

const _counterReducer = createReducer(fromCounterState.initialState,
  on(fromCounterActions.increment, (state) => {
    return{
      ...state,
      counter: state.counter + 1
      };
    }),
  on(fromCounterActions.decrement, (state) => {
    return{
      ...state,
      counter: state.counter - 1
      };
    }),
    on(fromCounterActions.reset, (state) => {
      return{
        ...state,
        counter: 0
        };
      }),
  );

  export function counterReducer(state = fromCounterState.initialState, action: Action) {
    return _counterReducer(state, action);
  }
