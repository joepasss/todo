import React from 'react';
import Divider from '../components/divider/divider';
import { AppStateContext, useDispatch } from '../context/TodoState';
import { TodoStateValue } from '../context/TodoStateType';

export const AddTodo = () => {
  const dispatch = useDispatch();

  let newIcon: string = '';
  let newTitle: string = '';

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    newTitle = e.target.value;
    console.log(newTitle);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const closeHandler = (state: TodoStateValue) => {
    dispatch({
      type: 'TOGGLE',
      payload: {
        states: {
          isCalendarOpen: false,
          isPageOpen: !state.states.isPageOpen,
        },
      },
    });
  };

  const submitHandler = (state: TodoStateValue) => {
    console.log(state);

    dispatch({
      type: 'ADD_TODO',
      payload: {
        todo: {
          items: {
            title: newTitle,
            icon: newIcon,
          },
        },
      },
    });

    dispatch({
      type: 'TOGGLE',
      payload: {
        states: {
          isCalendarOpen: false,
          isPageOpen: false,
        },
      },
    });
  };

  return (
    <AppStateContext.Consumer>
      {(state) => {
        return (
          <section className='addtodo container'>
            <div className='addtodo__overlay'></div>

            <div className='addtodo__contents'>
              <div className='addtodo__contents--header'>
                <h3 className='addtodo__contents--header__title'>Add</h3>

                <button
                  className='addtodo__contents--header__closeBtn'
                  onClick={() => closeHandler(state)}
                >
                  X
                </button>
              </div>

              <Divider />

              <form className='addtodo__contents--form'>
                <input
                  type='text'
                  placeholder='제목'
                  onChange={(e) => handleTextChange(e)}
                />
                <input
                  type='date'
                  placeholder='asdf'
                  onChange={(e) => handleDateChange(e)}
                />
                <button
                  type='button'
                  className='button'
                  onClick={() => {
                    submitHandler(state);
                  }}
                >
                  저장
                </button>
              </form>
            </div>
          </section>
        );
      }}
    </AppStateContext.Consumer>
  );
};
