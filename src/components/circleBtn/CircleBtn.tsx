import React from 'react';
import './circleBtn.scss';

interface Props {
  content: string;
  clickHandler?: Function;
  border?: boolean;
}

const CircleBtn: React.FC<Props> = ({
  content,
  clickHandler,
  border = true,
}) => {
  return (
    <div
      className={border ? 'circleBtn' : 'circleBtn noBorder'}
      onClick={clickHandler ? () => clickHandler() : () => {}}
    >
      <p className='circleBtn__content'>{content}</p>
    </div>
  );
};

export default CircleBtn;
