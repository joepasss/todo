import { FC } from 'react';
import { TodoDataType } from '../../types/todo';
import './todo.scss';

interface Props {
  todo: TodoDataType;
}

const Todo: FC<Props> = ({ todo }) => {
  return (
    <div className='todo'>
      <div className='todo__content'>
        <h3 className='todo__content--icon'>{todo.icon}</h3>

        <h3 className='todo__content--title'>{todo.title}</h3>
      </div>

      <div className='todo__trailler'>
        <div className='todo__trailler--moreinfo'>
          <h3 className='todo__trailler--moreinfo__icon'>🗑️</h3>
        </div>
      </div>
    </div>
  );
};

export default Todo;
