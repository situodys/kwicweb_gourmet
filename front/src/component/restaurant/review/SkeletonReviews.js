import {Review} from "./Review";
import {Container} from "react-bootstrap";

export default function SkeletonReviews() {

    const review =
        {
            title: "title",
            content: "contentcontentcontentcontentcontent",
            rating: "4",
            emailPrefix: "emailPrefix",
            createdAt: "createdAt1234:123",
            menus: [
                "menu1", "menu2", "menu3"
            ]
        };

    const reviews = new Array(8).fill(review);


    return (
        <Container style={{minHeight: '490px'}}>
            <div>로그인 후 확인하실 수 있습니다</div>
            <hr/><br/>
            <button type="button"
                    className="btn btn-primary btn-lg px-5"
                    style={{borderRadius: "27px", filter: 'blur(7px)'}}
                    disabled={true}
            >등록하기
            </button>
            <div className="row" style={{marginBottom: '16px', filter: 'blur(7px)'}}>
                {reviews?.map((review) => (
                    <Review review={review}></Review>
                ))}
            </div>
        </Container>
    )
};