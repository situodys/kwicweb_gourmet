import {ProposalList} from "./ProposalList";
import {useEffect, useState} from "react";

import customAxios from "../../../api/customAxios";

import Col from "react-bootstrap/Col";
import {Container, Pagination} from "react-bootstrap";

const Proposal = (props) => {

    const {restaurantId} = props;
    const [proposalResponse, setProposalResponse] = useState({});

    const [pageList, setPageList] = useState([]);


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
    }, []);

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

    return (
        <div class="album py-5" style={{backgroundColor: "#fff7ec"}}>
            <Container>
                <hr/>
                <ProposalList proposals={proposalResponse?.data}></ProposalList>
                <Pagination className={"justify-content-center"}>{pageList}</Pagination>
            </Container>
        </div>);
};
export default Proposal;
