import { TodoDataType } from '../types/todo';

export interface TodoStateValue {
  todo: {
    items: TodoDataType[];
  };
  states: {
    isCalendarOpen: boolean;
    isAddPageOpen: boolean;
  };
  dates: {
    today: Date;
  };
}

interface Action<T> {
  type: T;
}

export interface DeleteTodoAction extends Action<'DELETE_TODO'> {
  payload: {
    id: string;
  };
}

export interface InitalizeTodoAction extends Action<'INITALIZE_TODO'> {
  payload: {
    todo: TodoStateValue['todo'];
  };
}
