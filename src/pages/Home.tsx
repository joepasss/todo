import { Header } from '../sections/header/Header';
import { Weekly } from '../sections/weekly/Weekly';
import './home.scss';

export interface IHomeProps {}

export function Home(props: IHomeProps) {
  return (
    <section className='home container'>
      <Header />
      <Weekly />
    </section>
  );
}
