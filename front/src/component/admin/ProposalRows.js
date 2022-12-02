import {Button} from "react-bootstrap";

export default function ProposalRows(props) {
    const {proposal, handleButton}  = props;

    const cols = [
        "proposalId",
        "title",
        "category",
        "content",
        "status",
    ]

    const toPostData = () =>{
        let postData = {};
        postData.category = proposal.category;
        postData.content = proposal.content;
        postData.memberId = proposal.memberId;
        postData.menuId = proposal.menuId;
        postData.proposalId = proposal.proposalId;
        postData.restaurantId = proposal.restaurantId;
        postData.title = proposal.title;
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