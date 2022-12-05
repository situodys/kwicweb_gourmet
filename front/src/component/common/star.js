import {faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function star (rate,size) {
    const star = (className, size) => {
        return <FontAwesomeIcon
            icon={faStar}
            size={size}
            className={className}
        />;
    };

    const convertRateToStars = () =>{
        let stars = [];
        for(let i=1; i<=5;i++){
            if (i <= rate) {
                stars.push(star("star-checked",size));
                continue;
            }
            stars.push(star(""));
        }
        return stars
    }

    return (
        convertRateToStars()
    );
};