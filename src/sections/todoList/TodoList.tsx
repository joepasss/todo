import { FC, useState } from 'react';
import Divider from '../../components/divider/divider';
import Todo from '../../components/todo/Todo';
import { TodoDataType } from '../../types/todo';

interface Props {
  todoList: TodoDataType[];
}

export const TodoList: FC<Props> = ({ todoList }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const today = new Date();

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <section className='todolist'>
      <div className='todolist__header'>
        <h2 className='todolist__header--title'>
          {today.getMonth() + 1}월 {today.getDate()}일 {days[today.getDay()]}
        </h2>
        <h3
          className={
            isOpen
              ? 'todolist__header--trailler active'
              : 'todolist__header--trailler'
          }
          onClick={() => setIsOpen(!isOpen)}
        >
          &and;
        </h3>
      </div>
      {todoList.length === 0 ? (
        <div className='todolist__empty'>
          <h3 className='todolist__empty--header'>NO TODOs</h3>

          <button className='todolist__empty--addbtn'>Add TODO</button>
        </div>
      ) : (
        <div className='todolist__content'>
          {todoList.map((todo: TodoDataType) => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </div>
      )}

      <Divider />
    </section>
  );
};
