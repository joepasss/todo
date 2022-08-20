import { FC } from 'react';
import { useDispatch } from '../../context/TodoState';
import { TodoDataType } from '../../@types/todoTypes';
import CircleBtn from '../circleBtn/CircleBtn';
import './todo.scss';

interface Props {
  todo: TodoDataType;
}

const Todo: FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();

  const deleteFunction = (id: string) => {
    dispatch({
      type: 'DELETE_TODO',
      payload: {
        id: id,
      },
    });
  };

  return (
    <div className='todo'>
      <div className='todo__content'>
        <h3 className='todo__content--icon'>{todo.icon}</h3>

        <h3 className='todo__content--title'>{todo.title}</h3>
      </div>

      <div className='todo__trailler'>
        <div
          className='todo__trailler--moreinfo'
          onClick={() => deleteFunction(todo.id)}
        >
          <CircleBtn content='🗑️' border={false} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
