import {Button} from "react-bootstrap";

export default function NotificationRow(props) {

    const {notification}  = props;

    const cols = [
        "category",
        "helper",
        "previousContent",
        "updatedContent",
        "createdAt",
    ]

    const toEnum = (category) =>{
        if (category === "menuName") {
            return "MENU_NAME";
        }
        if (category === "price") {
            return "PRICE";
        }
        if (category === "openTime") {
            return "OPEN_TIME";
        }
        if (category === "closeTime") {
            return "CLOSE_TIME";
        }
    }

    return (
        <tr>
            {
                cols.map((keyValue,id) =>
                    <td>{keyValue ==="helper" && notification.category === "price"? "-":notification[keyValue]}</td>
                )
            }
        </tr>
    );
}