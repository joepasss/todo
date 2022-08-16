import { FC, useState } from 'react';
import Divider from '../../components/divider/divider';
import Todo from '../../components/todo/Todo';
import { AddTodo } from '../../pages/AddTodo';
import { TodoDataType } from '../../types/todo';

interface Props {
  todoList: TodoDataType[];
  deleteFunction: Function;
}

export const TodoList: FC<Props> = ({ todoList, deleteFunction }) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const [isAddPageOpen, setIsPageOpen] = useState<boolean>(false);

  const today = new Date();

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <section className='todolist'>
      <div className='todolist__header'>
        <div className='todolist__header--contents'>
          <h2 className='todolist__header--contents__title'>
            {today.getMonth() + 1}월 {today.getDate()}일 {days[today.getDay()]}
          </h2>
          <h3
            className={
              isCalendarOpen
                ? 'todolist__header--contents__trailler active'
                : 'todolist__header--contents__trailler'
            }
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
          >
            &and;
          </h3>
        </div>

        <div className='todolist__header--trailler'>
          <h3 className='todolist__header--trailler__addbtn'>+</h3>
        </div>
      </div>
      {todoList.length === 0 ? (
        <div className='todolist__empty'>
          <h3 className='todolist__empty--header'>NO TODOs</h3>

          <button
            className='todolist__empty--addbtn'
            onClick={() => setIsPageOpen(!isAddPageOpen)}
          >
            Add TODO
          </button>
        </div>
      ) : (
        <div className='todolist__content'>
          {todoList.map((todo: TodoDataType) => (
            <Todo todo={todo} key={todo.id} deleteFunction={deleteFunction} />
          ))}
        </div>
      )}

      <Divider />

      {isAddPageOpen && <AddTodo />}
    </section>
  );
};
