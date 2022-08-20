import React from 'react';
import './circleBtn.scss';

interface Props {
  content?: string | React.ReactNode;
  src?: string;
  clickHandler?: Function;
  border?: boolean;
  rotate?: boolean;
}

const CircleBtn: React.FC<Props> = ({
  content,
  clickHandler,
  border = true,
  rotate = false,
  src,
}) => {
  return (
    <div
      className={
        border
          ? rotate
            ? 'circleBtn rotate'
            : 'circleBtn'
          : rotate
          ? 'circleBtn noBorder rotate'
          : 'circleBtn noBorder'
      }
      onClick={clickHandler ? () => clickHandler() : () => {}}
    >
      {src ? (
        <img src={src} alt='content' className='circleBtn__content' />
      ) : (
        <p className='circleBtn__content'>{content}</p>
      )}
    </div>
  );
};

export default CircleBtn;
