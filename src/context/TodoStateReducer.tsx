import { TodoDataType } from '../@types/todoTypes';
import {
  AddTodoAction,
  DeleteTodoAction,
  InitalizeTodoAction,
  TodoStateValue,
  ToggleAction,
  UpdateTodoAction,
} from './TodoStateType';
import { v4 as uuidv4 } from 'uuid';

const deleteItem = (id: string, item: TodoDataType[]) => {
  const newTodo = item.filter((item: TodoDataType) => item.id !== id);

  return newTodo;
};

const itemToAdd = (payload: Omit<TodoDataType, 'id'>) => {
  return { ...payload, id: uuidv4() };
};

const reducer = (
  state: TodoStateValue,
  action:
    | DeleteTodoAction
    | InitalizeTodoAction
    | ToggleAction
    | AddTodoAction
    | UpdateTodoAction
) => {
  if (action.type === 'DELETE_TODO') {
    return {
      ...state,
      todo: { items: deleteItem(action.payload.id, state.todo.items) },
    };
  } else if (action.type === 'INITALIZE_TODO') {
    return { ...state, todo: action.payload.todo };
  } else if (action.type === 'TOGGLE') {
    return { ...state, states: action.payload.states };
  } else if (action.type === 'ADD_TODO') {
    return {
      ...state,
      todo: {
        items: [...state.todo.items, itemToAdd(action.payload.todo.items)],
      },
    };
  } else if (action.type === 'UPDATE_TODO') {
    const updItem = action.payload.updItem;

    state.todo.items.map((item: TodoDataType) =>
      item.id === updItem.id ? (item.title = updItem.title) : item
    );

    return {
      ...state,
    };
  }

  return state;
};

export default reducer;
