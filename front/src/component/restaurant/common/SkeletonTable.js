import Card from "react-bootstrap/Card";
import {Container, Pagination, Table} from "react-bootstrap";
import NotificationRow from "../notification/NotificationRow";

export default function SkeletonTable (props) {

    const {needButton} = props;

    const notification ={
        category: 'category',
        createdAt: 'createdAt123asdf12',
        previousContent: 'previousContent',
        updatedContent: 'updatedContent'
    }

    const notifications = new Array(9).fill(notification);

    return(
        <Container
            className={""}
        >
            <div >로그인 후 확인하실 수 있습니다</div>
            <hr/><br/>
            {needButton &&
                <button type="button"
                        className="btn btn-primary btn-lg px-5"
                        style={{borderRadius: "27px", filter: 'blur(7px)'}}
                        disabled={true}
                >등록하기
                </button>
            }
            <Card
                style={{
                    border: "0px",
                    boxShadow: "0px 2px 2px 0px rgba(50,50,50,0.4)",
                    filter: 'blur(7px)'
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
                        {notifications.map((notification, idx) =>
                            <NotificationRow key={idx} notification={notification}/>
                        )}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    )
}