import {Container, Pagination, Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import customAxios from "../../../api/customAxios";
import NotificationRow from "./NotificationRow";

export default function Notification(props) {

    const {restaurantId} = props;
    const [notificationResponse, setNotificationResponse] = useState({});
    const [pageList, setPageList] = useState([]);

    useEffect(() => {
        void loadNotifications(0, 10, -1);
    }, []);

    useEffect(() => {
        updatePageList();
    }, [notificationResponse]);

    const loadNotifications = async (page, size, totalCount) => {
        try {
            let response = await customAxios.get(`/notifications?restaurantId=${restaurantId}&page=${page}&size=10&totalCount=${totalCount}`);
            setNotificationResponse(response.data);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const updatePageList = () => {
        let {startIndex, endIndex, curPage} = notificationResponse;
        let pageLists = [];
        if (notificationResponse.prev) {
            pageLists.push(<Pagination.Prev onClick={e => handlePage(e, startIndex - 2)}/>)
        }
        for (let idx = startIndex; idx <= endIndex; idx++) {
            pageLists.push(<Pagination.Item onClick={e => handlePage(e, idx - 1)} key={idx}
                                            active={idx === curPage}>{idx}</Pagination.Item>)
        }
        if (notificationResponse.next) {
            pageLists.push(<Pagination.Next onClick={e => handlePage(e, notificationResponse.endIndex)}/>)
        }
        setPageList(pageLists);
    }

    const handlePage = async (e, nextPage) => {
        e.preventDefault();
        await loadNotifications(nextPage, 10, notificationResponse.totalCount);
    }

    return (
        <div className="album py-5" style={{backgroundColor: "#fff7ec"}}>
            <Container className={"text-center align-items-center"}>
                <hr/>
                <Table bordered style={{minHeight: '490px', backgroundColor: '#ffffff'}}>
                    <thead>
                    <tr>
                        <th>카테고리</th>
                        <th>참고</th>
                        <th>변경 전</th>
                        <th>변경 후</th>
                        <th>등록 시간</th>
                    </tr>
                    </thead>
                    <tbody>
                    {notificationResponse?.notifications?.map((notification, idx) =>
                        <NotificationRow key={idx} notification={notification}/>
                    )}
                    </tbody>
                </Table>

                <Pagination className={"justify-content-center"}>{pageList}</Pagination>
            </Container>
        </div>
    );
};