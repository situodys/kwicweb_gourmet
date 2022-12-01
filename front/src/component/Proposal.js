import { ProposalList } from "./ProposalList";
import { useState, useEffect } from "react";

import customAxios from "../api/customAxios";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Proposal = (props) => {
  const [proposalList, setProposalList] = useState([]);

  const handleProposalList = async () => {
    try {
      const response = await customAxios.get("/menus?restaurantId=2");
      if (response.status === 200) {
        return response.data.menus;
      }
    } catch (err) {
      if (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    setProposalList(handleProposalList());
  }, []);

  return (
    <>
      <div class="album py-5" style={{ backgroundColor: "#fff7ec" }}>
        <div class="container">
          <h1 className="">Proposal</h1>
          <p>Total: 2012</p>
          <hr></hr>
          <div class="row">
            <Col className="col-12">
              <ProposalList proposalList={proposalList}></ProposalList>
            </Col>
          </div>
        </div>
      </div>
    </>
  );
};
export default Proposal;
