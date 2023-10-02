import React from 'react';
import { TodoCounter } from '../TodoCounter/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index';
import { CreateTodoButton } from '../CreateTodoButton/index';

function AppUI({ completedTodos, totalTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo, loading, error }) {
    return (
        <React.Fragment>
            <TodoCounter completed={completedTodos} total={totalTodos} />
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

            <TodoList>

                {loading && <p>Cargando...</p>}
                {error && <p>Hubo un error...</p>}
                {(!loading && searchedTodos.lenght === 0) && <p>Crea tu primer TODO...</p>}
                {searchedTodos.map(todo => (
                    <TodoItem text={todo.text} completed={todo.completed} key={todo.text} onComplete={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)} />
                ))}
            </TodoList>

            <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI }