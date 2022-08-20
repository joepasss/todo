import Header from '../header/Header';
import Todo from '../todo/Todo';
import './list.scss';
import todo from '../../data/mockup.json';
import CircleBtn from '../circleBtn/CircleBtn';
import Calendar from '../calendar/Calendar';
import { AppStateContext, useDispatch } from '../../context/TodoState';
import { TodoStateValue } from '../../context/TodoStateType';
import AddItem from '../addItem/AddItem';

const List = () => {
  const dispatch = useDispatch();

  const toggleAddPage = (state: TodoStateValue['states']) => {
    return dispatch({
      type: 'TOGGLE',
      payload: {
        states: {
          isCalendarOpen: false,
          isPageOpen: !state.isPageOpen,
        },
      },
    });
  };

  return (
    <AppStateContext.Consumer>
      {(state) => {
        return (
          <div className='list'>
            <Header
              content={['8월 20일 토요일', <Calendar />]}
              trailler={
                <CircleBtn
                  content={state.states.isPageOpen ? 'x' : '+'}
                  clickHandler={() => toggleAddPage(state.states)}
                />
              }
            />
            <div className='list__content'>
              {state.states.isPageOpen && <AddItem />}
              <div className='list__content--todos'>
                <Todo todo={todo[0]} />
              </div>
            </div>
          </div>
        );
      }}
    </AppStateContext.Consumer>
  );
};

export default List;
