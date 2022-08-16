import { useEffect, useState } from 'react';
import { Header } from '../sections/header/Header';
import { TodoList } from '../sections/todoList/TodoList';
import './home.scss';

import { TodoDataType } from '../types/todo';
import todoData from '../data/mockup.json';

export function Home() {
  const [todo, setTodo] = useState<TodoDataType[]>(todoData);

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure?')) {
      setTodo(todo.filter((item: TodoDataType) => item.id !== id));
    }
  };

  return (
    <section className='home container'>
      <Header />
      <TodoList todoList={todo} deleteFunction={handleDelete} />
    </section>
  );
}
