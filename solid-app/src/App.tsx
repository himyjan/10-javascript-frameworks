import { createSignal, onMount } from "solid-js";

function App() {

  const [todos, setTodos] = createSignal<string[]>([]);
  let todoText: HTMLInputElement;

  onMount(() => {
    const existingTodos: string | null = localStorage.getItem('todos');
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
  });

  function addTodo(event: { preventDefault: () => void; }) {
    event.preventDefault();
    const next: string[] = [...todos(), todoText.value];
    setTodos(next);
    localStorage.setItem('todos', JSON.stringify(next));
  }

  return (
    <div>
      <ul>
        {todos().map((todo, index) => (<li key={index}>{todo}</li>))}
      </ul>

      <form onSubmit={addTodo}>
        <input type="text" ref={todoText} />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  );
}

export default App;
