import './customSelector.scss';

const CustomSelector = () => {
  const icons: string[] = ['✔️', '📄'];

  return (
    <div className='wrapper'>
      <div className='selector'>
        <p className='icon'>{icons[0]}</p>
      </div>

      <div className='options'>
        {icons.map((icon: string, index: number) => (
          <p className='icon' key={index}>
            {icon}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CustomSelector;
