import { ReactComponent as CompleteSVG } from "../../assets/complete-icon.svg";
import { ReactComponent as DeleteSVG } from "../../assets/delete-icon.svg";
import '../TodoIcon/TodoIcon.css';

const iconTypes = {
    "check": (color) => <CompleteSVG className="Icon-svg" fill={color} />,
    "delete": (color) => <DeleteSVG className="Icon-svg" fill={color} />
};

function TodoIcon({ type, color, onClick }) {
    return (
        <span 
        className={`Icon-container Icon-container-${type}`}
        onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon };