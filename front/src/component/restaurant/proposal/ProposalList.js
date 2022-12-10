import {useState, useEffect} from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import {Table} from "react-bootstrap";

export const ProposalList = (props) => {

    const {proposals} = props;

    const cols = [
        "title", "category", "content", "status"
    ];

    const toPrintForm = (keyValue, value) => {
        if (keyValue === "title" || keyValue === "content") return value;
        if (keyValue === "status") {
            if (value === "wait") return "대기";
            if (value === "apply") return "반영";
            if (value === "refuse") return "반려";
        }
        if (keyValue === "category") {
            if (value === "menuName") return "메뉴명"
            if (value === "openTime") return "오픈 시간"
            if (value === "closeTime") return "마감 시간"
            if (value === "price") return "메뉴 가격"
        }
    }

    const statusStyle = (col,status) =>{
        if(col !== "status") return;
        if(status==="apply"){
            return {
            color: "#3cb371",
            }
        }
        if (status === "refuse") {
            return {
                color: "#ee4a5d"
            }
        }
    }

    return (
        <>
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
                            <th>제목</th>
                            <th>카테고리</th>
                            <th>요청 내용</th>
                            <th>처리 상태</th>
                        </tr>
                        </thead>
                        <tbody>
                        {proposals?.map((element, outerKey) => (
                            <tr key={outerKey}>
                                {
                                    cols.map((keyValue, idx) =>
                                        <td style={statusStyle(keyValue,element[keyValue])} key={idx}>{toPrintForm(keyValue, element[keyValue])} </td>
                                    )
                                }
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </>
    );
};
