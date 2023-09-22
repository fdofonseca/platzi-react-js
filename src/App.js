import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';


const defaultTodos = [
  { text: 'Cortar Manzanas', completed: true },
  { text: 'Cortar Platanos', completed: false },
  { text: 'Cortar Duraznos', completed: true },
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={4} total={15} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem text={todo.text} completed={todo.completed} key={todo.text} />
        ))}
        {/* <TodoItem />
        <TodoItem />
        <TodoItem /> */}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
