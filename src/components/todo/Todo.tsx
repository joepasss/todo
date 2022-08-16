import './todo.scss';

const Todo = () => {
  return (
    <div className='todo'>
      <div className='todo__content'>
        <h3 className='todo__content--icon'>📄</h3>

        <h3 className='todo__content--title'>TITLE</h3>
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
