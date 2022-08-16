import { FC } from 'react';
import Divider from '../../components/divider/divider';
import Todo from '../../components/todo/Todo';
import { AppStateContext } from '../../context/TodoState';
import { AddTodo } from '../../pages/AddTodo';
import { TodoDataType } from '../../types/todo';

export const TodoList: FC = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <AppStateContext.Consumer>
      {(state) => {
        return (
          <section className='todolist'>
            <div className='todolist__header'>
              <div className='todolist__header--contents'>
                <h2 className='todolist__header--contents__title'>
                  {state.today.getMonth() + 1}월 {state.today.getDate()}일{' '}
                  {days[state.today.getDay()]}
                </h2>
                <h3
                  className={
                    state.states.isCalendarOpen
                      ? 'todolist__header--contents__trailler active'
                      : 'todolist__header--contents__trailler'
                  }
                  onClick={() => {}}
                >
                  &and;
                </h3>
              </div>

              <div className='todolist__header--trailler'>
                <h3
                  className='todolist__header--trailler__addbtn'
                  onClick={() => {}}
                >
                  +
                </h3>
              </div>
            </div>
            {state.todo.items.length === 0 ? (
              <div className='todolist__empty'>
                <h3 className='todolist__empty--header'>NO TODOs</h3>

                <button className='todolist__empty--addbtn' onClick={() => {}}>
                  Add TODO
                </button>
              </div>
            ) : (
              <div className='todolist__content'>
                {state.todo.items.map((todo: TodoDataType) => (
                  <Todo todo={todo} key={todo.id} />
                ))}
              </div>
            )}

            <Divider />

            {state.states.isAddPageOpen && <AddTodo />}
          </section>
        );
      }}
    </AppStateContext.Consumer>
  );
};
