import { useState } from 'react';
import { Header } from '../sections/header/Header';
import { TodoList } from '../sections/todoList/TodoList';
import './home.scss';

import { TodoDataType } from '../types/todo';

export function Home() {
  const [todo, setTodo] = useState<TodoDataType[]>([]);

  return (
    <section className='home container'>
      <Header />
      <TodoList todoList={todo} />
    </section>
  );
}
