import customAxios from "../api/customAxios";

const NotFound = () => {

    const test = async (e) => {
        e.preventDefault();
        try {
            const response = await customAxios.get("/reviews?restaurantId=10");
        } catch (err){
            console.log(err);
        }

    };

    return (
        <div>
            잘못된 경로의 접근입니다.
            <button onClick={test}>클ㄹ리리리릭</button>
        </div>
    );
};

export default NotFound;