import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI'

//  const defaultTodos = [
//    { text: 'Cortar Manzanas', completed: true },
//    { text: 'Cortar Platanos', completed: false },
//    { text: 'Cortar Naranjas', completed: true },
//    { text: 'Cortar Naranjas 2', completed: false },
//  ]
//  localStorage.setItem('todos_list', JSON.stringify(defaultTodos));

// localStorage.removeItem('todos_list');

function App() {

  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('todos_list', []);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return <AppUI
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    loading={loading}
    error={error}
  />
}

export default App;
