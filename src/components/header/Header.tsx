import './header.scss';

interface Props {
  content: React.ReactNode;
  trailler?: React.ReactNode;
}

const Header: React.FC<Props> = ({ content, trailler }) => {
  return (
    <div className='header'>
      <div className='header__contents'>
        <div className='header__contents--mainGroup'>{content}</div>

        {trailler && (
          <div className='header__contents--traillerGroup'>{trailler}</div>
        )}
      </div>
    </div>
  );
};

export default Header;
