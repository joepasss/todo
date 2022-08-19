import Header from '../header/Header';
import Todo from '../todo/Todo';
import './list.scss';
import todo from '../../data/mockup.json';
import CircleBtn from '../circleBtn/CircleBtn';
import Calendar from '../calendar/Calendar';

const List = () => {
  return (
    <div className='list'>
      <Header
        content={['8월 20일 토요일', <Calendar />]}
        trailler={<CircleBtn content='+' />}
      />
      <div className='list__contents'>
        <div className='list__content--calendar'>
          <Todo todo={todo[0]} />
        </div>
      </div>
    </div>
  );
};

export default List;
