import React from 'react';
import Divider from '../components/divider/divider';

export const AddTodo = () => {
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <section className='addtodo container'>
      <div className='addtodo__overlay'></div>

      <div className='addtodo__contents'>
        <div className='addtodo__contents--header'>
          <h3 className='addtodo__contents--header__title'>Add</h3>

          <button className='addtodo__contents--header__closeBtn'>X</button>
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
          <button className='submit'>저장</button>
        </form>
      </div>
    </section>
  );
};
