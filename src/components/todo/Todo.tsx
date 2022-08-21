import React, { FC, useState } from 'react';
import { useDispatch } from '../../context/TodoState';
import { TodoDataType } from '../../@types/todoTypes';
import CircleBtn from '../circleBtn/CircleBtn';
import './todo.scss';

interface Props {
  todo: TodoDataType;
}

const Todo: FC<Props> = ({ todo }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>(todo.title);

  const dispatch = useDispatch();

  const deleteFunction = (id: string) => {
    if (window.confirm('Are you sure you want to delete?')) {
      dispatch({
        type: 'DELETE_TODO',
        payload: {
          id: id,
        },
      });
    }
  };

  const titleReset = () => {
    setNewTitle(todo.title);
  };

  const changeTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const submitHandler = (id: string) => {
    setIsEdit(false);

    dispatch({
      type: 'UPDATE_TODO',
      payload: {
        updItem: {
          id,
          title: newTitle,
        },
      },
    });
  };

  return (
    <div className='todo'>
      <div className='todo__content'>
        {isEdit ? (
          <>
            <h3 className='todo__content--icon'>{todo.icon}</h3>
            <input
              type='text'
              value={newTitle}
              onChange={(e) => changeTextHandler(e)}
              autoFocus
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  submitHandler(todo.id);
                }
              }}
              onBlur={() => submitHandler(todo.id)}
            />
          </>
        ) : (
          <>
            <h3 className='todo__content--icon'>{todo.icon}</h3>

            <h3
              className='todo__content--title'
              onClick={() => {
                setIsEdit(true);
              }}
            >
              {todo.title}
            </h3>
          </>
        )}
      </div>

      <div className='todo__trailler'>
        {isEdit ? (
          <>
            <div
              className='todo__trailler--icon'
              onClick={() => {
                setIsEdit(!isEdit);
                titleReset();
              }}
            >
              <CircleBtn content='X' border={false} />
            </div>
            <div className='todo__trailler--icon' onClick={() => {}}>
              <CircleBtn content='✔️' border={false} />
            </div>
          </>
        ) : (
          <>
            <div
              className='todo__trailler--icon'
              onClick={() => setIsEdit(!isEdit)}
            >
              <CircleBtn content='🖊️' border={false} />
            </div>
            <div
              className='todo__trailler--icon'
              onClick={() => deleteFunction(todo.id)}
            >
              <CircleBtn content='🗑️' border={false} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Todo;
