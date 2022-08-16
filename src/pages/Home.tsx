import { Header } from '../sections/header/Header';
import { TodoList } from '../sections/todoList/TodoList';
import './home.scss';

import TodoStateProvider from '../context/TodoState';

export function Home() {
  return (
    <TodoStateProvider>
      <section className='home container'>
        <Header />
        <TodoList />
      </section>
    </TodoStateProvider>
  );
}
