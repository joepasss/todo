import React, { useState } from 'react';
import CircleBtn from '../components/circleBtn/CircleBtn';
import CustomSelector from '../components/customSelector/CustomSelector';
import { AppStateContext, useDispatch } from '../context/TodoState';
import { TodoStateValue } from '../context/TodoStateType';

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [selectedIcon, setSelectedIcon] = useState('✔️');

  let newTitle: string = '';

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    newTitle = e.target.value;
  };

  const handleIconChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedIcon(e.target.value);
  };

  const submitHandler = (state: TodoStateValue) => {
    console.log(state);

    dispatch({
      type: 'ADD_TODO',
      payload: {
        todo: {
          items: {
            title: newTitle,
            icon: selectedIcon,
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
        const closeHandler = () => {
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

        return (
          <section className='addtodo container'>
            <div className='addtodo__overlay'></div>

            <div className='addtodo__contents'>
              <div className='addtodo__contents--header'>
                <h3 className='addtodo__contents--header__title'>Add</h3>

                <CircleBtn content='X' clickHandler={closeHandler} />
              </div>

              <form className='addtodo__contents--form'>
                <CustomSelector />
                <input
                  type='text'
                  placeholder='제목'
                  onChange={(e) => handleTextChange(e)}
                />
              </form>
              <button
                type='button'
                className='button'
                onClick={() => {
                  submitHandler(state);
                }}
              >
                저장
              </button>
            </div>
          </section>
        );
      }}
    </AppStateContext.Consumer>
  );
};
