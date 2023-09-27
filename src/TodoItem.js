import './TodoItem.css';
import { CompleteIcon } from './CompleteIcon.js';
import { DeleteIcon } from './DeleteIcon.js';

function TodoItem(props) {
    return (
        <li className='TodoItem'>
            <CompleteIcon />
            {/* <span onClick={props.onComplete} className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>V</span> */}
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
            {/* <span onClick={props.onDelete} className='Icon Icon-delete'>X</span> */}
            <DeleteIcon />
        </li>
    );
}

export { TodoItem }