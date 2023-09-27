import { ReactComponent as CompleteSVG } from "./assets/complete-icon.svg";
import { ReactComponent as DeleteSVG } from "./assets/delete-icon.svg";

const iconTypes = {
    "check": <CompleteSVG />,
    "delete": <DeleteSVG />
};

function TodoIcon({ type }) {
    return (
        <span className={`Icon Icon-svg Icon-${type}`}>
            {iconTypes[type]}
        </span>
    )
}

export { TodoIcon };