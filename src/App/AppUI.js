import React from 'react';
import { TodoCounter } from '../TodoCounter/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index';
import { CreateTodoButton } from '../CreateTodoButton/index';

function AppUI({ completedTodos, totalTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo }) {
    return (
        <React.Fragment>
            <TodoCounter completed={completedTodos} total={totalTodos} />
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

            <TodoList>
                {searchedTodos.map(todo => (
                    <TodoItem text={todo.text} completed={todo.completed} key={todo.text} onComplete={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)} />
                ))}
            </TodoList>

            <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI }