import TodoStateProvider from '../../context/TodoState';
import Header from '../../components/header/Header';
import List from '../../components/list/List';

export function Home() {
  return (
    <TodoStateProvider>
      <section className='home container'>
        <Header content={'✔️'} />
        <List />
      </section>
    </TodoStateProvider>
  );
}
