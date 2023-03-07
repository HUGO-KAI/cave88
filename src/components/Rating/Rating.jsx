import {FaStar} from "react-icons/fa";
import RatingStyles from "./Rating.module.scss";

//Retourner le composant rating
function Rating (props) {
const ratingScale = [1, 2, 3, 4, 5];
    return (
        <div className={RatingStyles.stars}>
            {ratingScale.map((n) => (
                <FaStar
                    size="15px"
                    key={`star-${n}`}
                    className={n <= props.ratings?RatingStyles.star:RatingStyles.starGray}
                ></FaStar>
            ))}
        </div>
    );
}


export default Rating