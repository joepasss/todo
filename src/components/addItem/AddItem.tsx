import { FormEvent, useEffect, useState } from 'react';
import { useDispatch } from '../../context/TodoState';
import './addItem.scss';

const AddItem = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState<string>('');
  const [isChange, setIsChange] = useState<boolean>(false);
  const [btnDisabled, setBtnDisabled] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (text === '' || text === '<empty string>') {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      setIsChange(true);
      setMessage('');
    }

    setText(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text !== '') {
      handleAdd(text);
      setText('');

      return dispatch({
        type: 'TOGGLE',
        payload: {
          states: {
            isCalendarOpen: false,
            isPageOpen: false,
          },
        },
      });
    }
  };

  const handleAdd = (title: string) => {
    dispatch({
      type: 'ADD_TODO',
      payload: {
        todo: {
          items: {
            title: title,
            icon: '뭐',
          },
        },
      },
    });
  };

  useEffect(() => {
    if (text === '' && isChange) {
      setBtnDisabled(true);
      setMessage('제목을 입력해 주세요');
    }
  }, [text, isChange]);

  return (
    <div className='addItem'>
      <form className='input-group' onSubmit={(e) => handleSubmit(e)}>
        <input
          type='text'
          placeholder='제목'
          value={text}
          onChange={(e) => handleTextChange(e)}
        />
        <button
          type='submit'
          className={btnDisabled ? 'submitBtn disable' : 'submitBtn'}
        >
          ✔
        </button>
      </form>
      {message !== '' && (
        <div className='message-container'>
          <p className='error-message'>{message}</p>
        </div>
      )}
    </div>
  );
};

export default AddItem;
