import React, { createContext, useContext, useEffect, useReducer } from 'react';
import {
  DeleteTodoAction,
  InitalizeTodoAction,
  TodoStateValue,
} from './TodoStateType';
import data from '../data/mockup.json';
import { TodoDataType } from '../types/todo';

interface Props {
  children: React.ReactNode;
}

const defultStateValue: TodoStateValue = {
  todo: {
    items: [],
  },
  states: {
    isCalendarOpen: false,
    isAddPageOpen: false,
  },
  dates: {
    today: new Date(),
  },
};

export const AppStateContext = createContext(defultStateValue);
export const AppDispatchContext = createContext<
  React.Dispatch<DeleteTodoAction> | undefined
>(undefined);

const deleteItem = (id: string, item: TodoDataType[]) => {
  const newTodo = item.filter((item: TodoDataType) => item.id !== id);

  return newTodo;
};

const reducer = (
  state: TodoStateValue,
  action: DeleteTodoAction | InitalizeTodoAction
) => {
  if (action.type === 'DELETE_TODO') {
    return {
      ...state,
      todo: { items: deleteItem(action.payload.id, state.todo.items) },
    };
  } else if (action.type === 'INITALIZE_TODO') {
    return { ...state, todo: action.payload.todo };
  }

  return state;
};

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
    const items: TodoDataType[] = data;

    if (items) {
      dispatch({
        type: 'INITALIZE_TODO',
        payload: { todo: { items } },
      });
    }
  }, []);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export default TodoStateProvider;
