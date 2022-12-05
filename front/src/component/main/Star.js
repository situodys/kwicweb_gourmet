import {faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Star(props) {
    const {className} = props;
    return (
        <FontAwesomeIcon
            icon={faStar}
            size="xs"
            className={className}
        />
    );
};