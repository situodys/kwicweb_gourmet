import {Button} from "react-bootstrap";

export default function NotificationRow(props) {

    const {notification} = props;

    const cols = [
        "category",
        "ref",
        "previousContent",
        "updatedContent",
        "createdAt",
    ]

    const toEnum = (category) => {
        if (category === "menuName") {
            return "메뉴명";
        }
        if (category === "price") {
            return "가격";
        }
        if (category === "openTime") {
            return "오픈시간";
        }
        if (category === "closeTime") {
            return "마감시간";
        }
    }

    const toPrintForm = (col, val) => {
        if (col === "createdAt" || col === "updatedContent") {
            return val;
        }
        if (col === "ref") {
            if (notification.category === "price")
                return notification.previousContent.split(',')[0];
            return "";
        }
        if (col === "category") {
            return toEnum(notification.category);
        }
        if (col === "previousContent") {
            if (notification.category === "price")
                return notification.previousContent.split(',')[1];
            return notification.previousContent;
        }
    }

    return (
        <tr>
            {
                cols.map((keyValue, id) => {
                        return (
                            <td key={id}>{toPrintForm(keyValue, notification[keyValue])}</td>
                        )
                    }
                )
            }
        </tr>
    );
}