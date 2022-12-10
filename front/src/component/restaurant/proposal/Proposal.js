import {ProposalList} from "./ProposalList";
import {useEffect, useState} from "react";

import customAxios from "../../../api/customAxios";
import {Container, Pagination} from "react-bootstrap";
import ProposalModal from "./ProposalModal";

const Proposal = (props) => {

    const {restaurantId} = props;
    const [proposalResponse, setProposalResponse] = useState({});

    const [showRegister, setShowRegister] = useState(false);
    const [pageList, setPageList] = useState([]);

    const [registerFlag, setRegisterFlag] = useState(false);



    const init = async () => {
        try {
            const response = await customAxios.get(`/proposals/restaurant/${restaurantId}`);
            setProposalResponse(response.data);
            console.log(response.data);
        } catch (err) {
            if (err) {
                console.log(err);
            }
        }
    };

    useEffect(() => {
        void init();
    }, [registerFlag]);

    useEffect(() => {
        updatePageList();
    }, [proposalResponse]);

    const loadProposals = async (page, size, totalCount) => {
        try {
            let response = await customAxios.get(`/proposals/restaurant/${restaurantId}?page=${page}&size=10&totalCount=${totalCount}`);
            setProposalResponse(response.data);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const updatePageList = () => {
        if (!proposalResponse) return;
        let {startIndex, endIndex, curPage, prev, next} = proposalResponse;
        let pageLists = [];
        if (prev) {
            pageLists.push(<Pagination.Prev onClick={e => handlePage(e, startIndex - 2)}/>)
        }
        for (let idx = startIndex; idx <= endIndex; idx++) {
            pageLists.push(<Pagination.Item onClick={e => handlePage(e, idx - 1)} key={idx}
                                            active={idx === curPage}>{idx}</Pagination.Item>)
        }
        if (next) {
            pageLists.push(<Pagination.Next onClick={e => handlePage(e, endIndex)}/>)
        }
        setPageList(pageLists);
    }

    const handlePage = async (e, nextPage) => {
        e.preventDefault();
        await loadProposals(nextPage, 10, proposalResponse.totalCount);
    }

    const handleRegisterButton = () =>{
        setShowRegister(!showRegister);
    }

    const handleRegisterFlag = () =>{
        setRegisterFlag(!registerFlag);
    }

    return (
        <div class="album py-5" style={{backgroundColor: "#fff7ec"}}>
            <Container>
                <button
                    onClick={handleRegisterButton}
                    type="button"
                    className="btn btn-primary btn-lg px-5"
                    style={{borderRadius: "27px"}}
                >등록하기
                </button>
               {showRegister && <ProposalModal handleRegisterFlag={handleRegisterFlag} restaurantId={restaurantId} show={showRegister} handleClose={handleRegisterButton}/>}
                <hr/>
                <ProposalList proposals={proposalResponse?.data}></ProposalList>
                <Pagination className={"justify-content-center"}>{pageList}</Pagination>
            </Container>
        </div>);
};
export default Proposal;
