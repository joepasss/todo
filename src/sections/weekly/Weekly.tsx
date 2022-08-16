export const Weekly = () => {
  const day: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();

  return (
    <section className='weekly'>
      <h2 className='weekly__header'>
        {year}년 {month}월 {date}일
      </h2>

      <div className='weekly__content'>
        {day.map((item: string, index: number) => (
          <div className='weekly__content--datebox' key={index}>
            <h3 className='weekly__content--datebox__date'>{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
