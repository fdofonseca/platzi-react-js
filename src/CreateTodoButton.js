import './CreateTodoButton.css'

function CreateTodoButton() {
    return (
        <button onClick={
            (event) => {
                console.log('dfg')
            }
        } className='CreateTodoButton'>+</button>
    );
}

export { CreateTodoButton }