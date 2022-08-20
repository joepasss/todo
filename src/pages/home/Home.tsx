import './home.scss';

import TodoStateProvider from '../../context/TodoState';
import Header from '../../components/header/Header';
import CircleBtn from '../../components/circleBtn/CircleBtn';
import List from '../../components/list/List';

export function Home() {
  return (
    <TodoStateProvider>
      <section className='home container'>
        <Header content={'✔️'} trailler={<CircleBtn content='?' />} />
        <List />
      </section>
    </TodoStateProvider>
  );
}
