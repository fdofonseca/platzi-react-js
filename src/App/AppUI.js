import React from 'react';
import { TodoCounter } from '../components/TodoCounter/index';
import { TodoSearch } from '../components/TodoSearch/index';
import { TodoList } from '../components/TodoList/index';
import { TodoItem } from '../components/TodoItem/index';
import { TodosLoading } from '../components/TodosLoading/index';
import { TodosError } from '../components/TodosError/index';
import { EmptyTodos } from '../components/EmptyTodos/index';
import { CreateTodoButton } from '../components/CreateTodoButton/index';

function AppUI({ completedTodos, totalTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo, loading, error }) {
    return (
        <React.Fragment>
            <TodoCounter completed={completedTodos} total={totalTodos} />
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

            <TodoList>
                {loading && <>
                    <TodosLoading />
                    <TodosLoading />
                    <TodosLoading />
                </>}
                {error && <TodosError />}
                {(!loading && searchedTodos.lenght === 0) && <EmptyTodos />}
                {searchedTodos.map(todo => (
                    <TodoItem text={todo.text} completed={todo.completed} key={todo.text} onComplete={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)} />
                ))}
            </TodoList>

            <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI }