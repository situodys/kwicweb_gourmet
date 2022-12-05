import { MenuList } from "./MenuList";
import { useState, useEffect } from "react";

import customAxios from "../../../api/customAxios";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Menu = (props) => {
  const [menuList, setMenuList] = useState([]);

  const [menuList1, setMenuList1] = useState([]);
  const [menuList2, setMenuList2] = useState([]);

  const handleMenuList = async () => {
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
    setMenuList(handleMenuList());
  }, []);

  useEffect(() => {
    (async () => {
      let response = await menuList;
      const n = Math.ceil(response.length / 2);
      setMenuList1(response.slice(0, n));
      setMenuList2(response.slice(n, response.length));
    })();
  }, [menuList]);

  return (
    <>
      <div class="album py-5" style={{ backgroundColor: "#fff7ec" }}>
        <div class="container">
          <hr></hr>
          <div class="row">
            <Col className="col-6">
              <MenuList menuList={menuList1}></MenuList>
            </Col>
            <Col className="col-6">
              <MenuList menuList={menuList2}></MenuList>
            </Col>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;
