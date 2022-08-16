import Divider from '../../components/divider/divider';
import './header.scss';

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  return (
    <section className='header'>
      <div className='header__contents'>
        <h1 className='header__contents--title'>TODO</h1>

        <div className='header__contents--about'>
          <a href='#!' className='header__contents--about__link'>
            about
          </a>
        </div>
      </div>

      <Divider />
    </section>
  );
}
