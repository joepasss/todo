import CircleBtn from '../../components/circleBtn/CircleBtn';

export function Header() {
  return (
    <section className='header'>
      <div className='header__contents'>
        <h1 className='header__contents--title'>✔️</h1>

        <div className='header__contents--about'>
          <CircleBtn content='?' />
        </div>
      </div>
    </section>
  );
}
