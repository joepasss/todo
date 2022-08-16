import { Header } from '../sections/header/Header';
import { TodoList } from '../sections/todoList/TodoList';
import './home.scss';

export interface IHomeProps {}

export function Home(props: IHomeProps) {
  return (
    <section className='home container'>
      <Header />
      <TodoList />
    </section>
  );
}
