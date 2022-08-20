import Header from '../header/Header';
import Todo from '../todo/Todo';
import './list.scss';
import CircleBtn from '../circleBtn/CircleBtn';
import { AppStateContext, useDispatch } from '../../context/TodoState';
import { TodoStateValue } from '../../context/TodoStateType';
import AddItem from '../addItem/AddItem';
import addIcon from '../../assets/ios-add-512.png';

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

  const getHeader = (today: Date) => {
    const days: string[] = ['일', '월', '화', '수', '목', '금', '토'];

    const month = today.getMonth() + 1;
    const date = today.getDate();
    const day = today.getDay();

    return `${month}월 ${date}일 ${days[day]}`;
  };

  return (
    <AppStateContext.Consumer>
      {(state) => {
        return (
          <div className='list'>
            <Header
              content={getHeader(state.today)}
              trailler={
                <CircleBtn
                  src={addIcon}
                  rotate={state.states.isPageOpen}
                  clickHandler={() => toggleAddPage(state.states)}
                />
              }
            />
            <div className='list__content'>
              {state.states.isPageOpen && <AddItem />}
              {state.todo.items.length === 0 ? (
                <div className='list__content--empty'>
                  <h2 className='list__content--empty__content'>NO TODOs</h2>
                </div>
              ) : (
                <div className='list__content--todos'>
                  {state.todo.items.map((item, index) => {
                    return <Todo todo={item} key={index} />;
                  })}
                </div>
              )}
            </div>
          </div>
        );
      }}
    </AppStateContext.Consumer>
  );
};

export default List;
