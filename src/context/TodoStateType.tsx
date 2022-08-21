import { TodoDataType } from '../@types/todoTypes';

export interface TodoStateValue {
  todo: {
    items: TodoDataType[];
  };
  states: {
    isCalendarOpen: boolean;
    isPageOpen: boolean;
  };
  today: Date;
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

export interface ToggleAction extends Action<'TOGGLE'> {
  payload: {
    states: TodoStateValue['states'];
  };
}

export interface AddTodoAction extends Action<'ADD_TODO'> {
  payload: {
    todo: {
      items: Omit<TodoDataType, 'id'>;
    };
  };
}

export interface UpdateTodoAction extends Action<'UPDATE_TODO'> {
  payload: {
    updItem: Omit<TodoDataType, 'icon'>;
  };
}
