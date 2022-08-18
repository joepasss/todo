import React, { createContext, useContext, useReducer } from 'react';
import {
  AddTodoAction,
  DeleteTodoAction,
  TodoStateValue,
  ToggleAction,
} from './TodoStateType';
import reducer from './TodoStateReducer';

interface Props {
  children: React.ReactNode;
}

const defultStateValue: TodoStateValue = {
  todo: {
    items: [],
  },
  states: {
    isCalendarOpen: false,
    isPageOpen: false,
  },

  today: new Date(),
};

export const AppStateContext = createContext(defultStateValue);
export const AppDispatchContext = createContext<
  React.Dispatch<DeleteTodoAction | ToggleAction | AddTodoAction> | undefined
>(undefined);

export const useDispatch = () => {
  const dispatch = useContext(AppDispatchContext);

  if (!dispatch) {
    throw new Error(
      'useDispatch was called outside of the TodoSetStateContext provider'
    );
  }

  return dispatch;
};

const TodoStateProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defultStateValue);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export default TodoStateProvider;
