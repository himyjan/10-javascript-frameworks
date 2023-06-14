/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import { useEffect, useRef, useState } from 'react';

export const Todo = qwikify$(() => {

  // State
  const [todos, setTodos] = useState([]);

  // Binding
  const todoText = useRef();

  // Side Effects / Lifecycle
  useEffect(() => {
    const existingTodos = localStorage.getItem('todos');
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
  }, []);

  // Events
  function addTodo(event: { preventDefault: () => void; }) {
    event.preventDefault();
    const next = [...todos, todoText.current.value];
    setTodos(next);
    localStorage.setItem('todos', JSON.stringify(next));
  }

  return (
    <div>
      <ul>
        {todos.map(todo => (<li key={todo}>{todo}</li>))}  
      </ul>

      <form onSubmit={addTodo}>
        <input type="text" placeholder="What needs to be done?" ref={todoText} />
        <input type="submit" value="Add Todo" />
      </form>

    </div>
  );
})

