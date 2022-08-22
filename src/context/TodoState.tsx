import React, { createContext, useContext, useEffect, useReducer } from 'react';
import {
  AddTodoAction,
  DeleteTodoAction,
  TodoStateValue,
  ToggleAction,
  UpdateTodoAction,
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
  | React.Dispatch<
      DeleteTodoAction | ToggleAction | AddTodoAction | UpdateTodoAction
    >
  | undefined
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

  useEffect(() => {
    const todo = window.localStorage.getItem('todo');

    if (todo) {
      dispatch({
        type: 'INITALIZE_TODO',
        payload: {
          todo: JSON.parse(todo),
        },
      });
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('todo', JSON.stringify(state.todo));
  }, [state.todo]);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export default TodoStateProvider;
