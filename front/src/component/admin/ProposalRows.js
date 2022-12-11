import {Button} from "react-bootstrap";

export default function ProposalRows(props) {
    const {proposal, handleButton}  = props;

    const cols = [
        "proposalId",
        "restaurantId",
        "title",
        "category",
        "content",
        "status",
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

    const toPostData = () =>{
        let postData = {};
        postData.category = toEnum(proposal.category);
        postData.content = proposal.content;
        postData.memberId = proposal.memberId;
        postData.menuId = proposal.menuId;
        postData.proposalId = proposal.proposalId;
        postData.restaurantId = proposal.restaurantId;
        postData.title = proposal.title;

        console.log(postData);

        return postData;
    }

    return (
        <tr>
            {
                cols.map((keyValue,id) =>
                    <td>{proposal[keyValue]}</td>
                )
            }
            <td>
                {proposal.status === "wait" && <Button onClick={(e)=>handleButton(toPostData(),"apply")} size={"sm"} variant={"success"}>apply</Button>}
                {proposal.status === "wait" && <Button onClick={(e)=>handleButton(toPostData(),"refuse")} size={"sm"} variant={"danger"}>refuse</Button>}
            </td>
        </tr>
    );
};