import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import jwt_decode from "jwt-decode"
import {Container, Pagination, Table} from "react-bootstrap";
import customAxios from "../api/customAxios";
import ProposalRows from "../component/admin/ProposalRows";

export default function Admin() {

    const navigate = useNavigate();
    const [proposalResponse, setProposalResponse] = useState({});
    const [pageList, setPageList] = useState([]);

    useEffect(() => {
        isAdmin();
        void loadProposals(0, 10, -1);
    }, []);

    useEffect(() => {
        updatePageList();
    }, [proposalResponse]);

    const isAdmin = () => {
        let atk = window.localStorage.getItem("atk");
        let payload = jwt_decode(atk);
        if (!payload || payload.auth !== "ROLE_ADMIN") {
            navigate("/main")
        }
    }

    const loadProposals = async (page, size, totalCount) => {
        try {
            let response = await customAxios.get(`/proposals?page=${page}&size=10&totalCount=${totalCount}`);
            setProposalResponse(response.data);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const updatePageList = () =>{
        const {startIndex, endIndex, curPage} = proposalResponse;
        let pageLists = [];
        if (proposalResponse.prev) {
            pageLists.push(<Pagination.Prev onClick={handlePage}/>)
        }
        for (let idx = startIndex; idx < endIndex; idx++) {
            pageLists.push(<Pagination.Item onClick={e=>handlePage(e,idx-1)} key={idx} active={idx===curPage} >{idx}</Pagination.Item>)
        }
        if (proposalResponse.next) {
            pageLists.push(<Pagination.Next onClick={e=>handlePage(e,proposalResponse.endIndex)}/>)
        }
        setPageList(pageLists);
    }

    const handlePage = async(e,nextPage) => {
        e.preventDefault();
        await loadProposals(nextPage, 10, proposalResponse.totalCount);
    }

    const handleButton = async (postData, status) => {
        try {
            await customAxios.post(`/admin/proposal/apply/${status}`,
                postData);
        } catch (err) {
            console.log(err);
        }
    }



    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>title</th>
                    <th>category</th>
                    <th>request content</th>
                    <th>status</th>
                    <th>handler</th>
                </tr>
                </thead>
                <tbody>
                {proposalResponse && proposalResponse.data && proposalResponse.data.map((proposal, idx) => {
                    return <ProposalRows key={idx} proposal={proposal} handleButton={handleButton}/>
                })}
                </tbody>
            </Table>

            <Pagination>{pageList}</Pagination>
        </Container>
    )
}