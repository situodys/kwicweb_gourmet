import {Review} from "./Review";
import {useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";
import CustomAxios from "../../../api/customAxios";
import {Container} from "react-bootstrap";
import ReviewModal from "./ReviewModal";
import SkeletonReviews from "./SkeletonReviews";

const Reviews = (props) => {

    const [isAuthenticated, setIsAuthenticated] = useState(true);

    const {restaurantId} = props;
    const [reviewsResponse, setReviewsResponse] = useState();
    const [reviews, setReviews] = useState([]);
    const [menus, setMenus] = useState([]);
    const [lastId, setLastId] = useState();
    const [ref, inView] = useInView();

    const [showRegister, setShowRegister] = useState(false);
    const [registerFlag, setRegisterFlag] = useState(false);

    useEffect(() => {
        void init();
    }, [registerFlag]);

    useEffect(() => {
        if (lastId && inView) {
            void loadReviews();
        }
    }, [inView]);

    const init = async () => {
        try {
            await loadReviews("init");
            const response = await CustomAxios.get(`/menus/all?restaurantId=${restaurantId}`);
            setMenus(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const loadReviews = async (flag) => {
        try {
            let queryString;
            if(flag==="init"){
                setReviews([]);
                queryString = "";
            }
            else queryString = toQueryString();
            const response = await CustomAxios.get(`/reviews?restaurantId=${restaurantId}` + queryString);
            setReviewsResponse(response.data);
            setReviews((prevReviews) => [...prevReviews, ...response.data.data]);
            setLastId(response?.data?.lastId);
        } catch (err) {
            console.log(err);
            setIsAuthenticated(false);
        }
    }

    const toQueryString = () => {
        if (!lastId) return "";
        return `&lastId=${lastId}`;
    }

    const handleRegisterButton = () =>{
        setShowRegister(!showRegister);
    }

    const handleRegisterFlag =() =>{
        setRegisterFlag(!registerFlag);
    }

    return (
        <div class="album py-5" style={{backgroundColor: "#fff7ec"}}>
            {isAuthenticated ?
                <Container>
                    <button
                        onClick={handleRegisterButton}
                        type="button"
                        class="btn btn-primary btn-lg px-5"
                        style={{ borderRadius: "27px" }}
                    >등록하기</button>
                    {showRegister && <ReviewModal handleRegisterFlag={handleRegisterFlag} restaurantId={restaurantId} menus = {menus} show={showRegister} handleClose={handleRegisterButton}/>}
                    <hr/>
                    <div class="row" style={{marginBottom: '16px'}}>
                        {reviews?.map((review) => (
                            <Review review={review}></Review>
                        ))}
                    </div>
                    <div ref={ref}></div>
                </Container>
                :
                <SkeletonReviews/>
            }
        </div>
    );
};
export default Reviews;
