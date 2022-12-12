import {Container, Pagination, Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import customAxios from "../../../api/customAxios";
import NotificationRow from "./NotificationRow";
import Card from "react-bootstrap/Card";
import SkeletonTable from "../common/SkeletonTable";

export default function Notification(props) {

    const [isAuthenticated, setIsAuthenticated] = useState(true);
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
        } catch (err) {
            console.log(err);
            setIsAuthenticated(false);
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
            {isAuthenticated ?
                <Container className={"text-center align-items-center"}>
                    <hr/>
                    <Card
                        style={{
                            border: "0px",
                            boxShadow: "0px 2px 2px 0px rgba(50,50,50,0.4)",
                        }}
                        className="mb-4"
                    >
                        <Card.Body style={{minHeight: "490px", overflow: "auto"}}>
                            <Table className={"text-center"}>
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
                        </Card.Body>
                    </Card>
                    <Pagination className={"justify-content-center"}>{pageList}</Pagination>
                </Container>
                :
                <SkeletonTable needButton={false}/>
            }
        </div>
    );
};

