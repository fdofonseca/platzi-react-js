import './TodoCounter.css'

function TodoCounter({ total, completed }) {
    if (total === 0) {
        return (
            <h1 className='TodoCounter'>
                No hay tareas pendientes
            </h1>
        );
    } else {
        return (
            <h1 className='TodoCounter'>
                Has Completado <span>{completed}</span> de <span>{total}</span> TODOs
            </h1>
        );
    }
}

export { TodoCounter }