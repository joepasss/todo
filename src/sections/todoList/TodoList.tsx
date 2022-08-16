import Divider from '../../components/divider/divider';
import Todo from '../../components/todo/Todo';

export const TodoList = () => {
  const today = new Date();

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <section className='todolist'>
      <h2 className='todolist__header'>
        {today.getMonth() + 1}월 {today.getDate()}일 {days[today.getDay()]}
      </h2>

      <div className='todolist__content'>
        <Todo />
      </div>

      <Divider />
    </section>
  );
};
