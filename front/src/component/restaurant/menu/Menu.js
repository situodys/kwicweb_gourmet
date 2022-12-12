import {MenuList} from "./MenuList";
import {useState, useEffect} from "react";

import customAxios from "../../../api/customAxios";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Pagination} from "react-bootstrap";

const Menu = (props) => {
    const {restaurantId} = props;
    const [menuResponse, setMenuResponse] = useState();
    const [menuList1, setMenuList1] = useState([]);
    const [menuList2, setMenuList2] = useState([]);

    const [keyword, setKeyword] = useState("menuName");
    const [placeHolder,setPlaceHolder] =useState("입력한 단어가 포함된 메뉴가 검색됩니다.")
    const [searchInput, setSearchInput] = useState("");

    const [pageList, setPageList] = useState([]);

    const keywords = [
        {
            value: "menuName",
            label: "메뉴명",
        },
        {
            value: "price",
            label: "가격",
        }
    ];
    const placeHolders = {menuName: "입력한 단어가 포함된 메뉴가 검색됩니다.", price: "입력한 가격 이하의 메뉴가 검색됩니다."}

    useEffect(() => {
        void loadMenus(0, 10, -1);
    }, []);

    useEffect(() => {
        toPrintForm();
        updatePageList();
    }, [menuResponse]);

    const loadMenus = async (page, size, totalCount) => {
        try {
            let response = await customAxios.get(`/menus?restaurantId=${restaurantId}&page=${page}&size=10&totalCount=${totalCount}`+toQueryString());
            setMenuResponse(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const toPrintForm = () => {
        if (!menuResponse) return;
        let menus = menuResponse?.menus;
        const n = Math.ceil(menus.length / 2);
        setMenuList1(menus.slice(0, n));
        setMenuList2(menus.slice(n, menus.length));
    }

    const updatePageList = () => {
        if (!menuResponse) return;
        let {startIndex, endIndex, curPage, prev, next} = menuResponse;
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
        await loadMenus(nextPage, 10, menuResponse.totalCount);
    }

    const handleKeyword = (e)=>{
        e.preventDefault();
        setKeyword(e.target.value);
        setPlaceHolder(placeHolders[e.target.value]);
    }

    const handleInput = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    const handleSearchButton = (e) => {
        e.preventDefault();
        void loadMenus(0,10,-1,)
    }

    const toQueryString = ()=>{
        if (keyword === "menuName") {
            return `&menuName=${searchInput}`;
        }
        return `&price=${searchInput}`;
    }

    return (
        <>
            <div class="album py-5" style={{backgroundColor: "#fff7ec"}}>
                <div class="container">

                    <div className="input-group mb-3 cshadow-lg">
                        <select onChange={handleKeyword} style={{fontSize: '1rem'}}>
                            {keywords.map((keyword,idx)=>
                                <option key={idx} value={keyword.value}>{keyword.label}</option>
                            )}
                        </select>
                        <input
                            type="search"
                            className="form-control"
                            placeholder={placeHolder}
                            onChange={handleInput}
                        ></input>
                        <button
                            className="btn btn btn-primary"
                            type="button"
                            id="button-addon2"
                            onClick={handleSearchButton}
                        >
                            검색
                        </button>
                    </div>

                    <hr/>
                    <div class="row">
                        <Col className="col-6">
                            {menuList1 && <MenuList menuList={menuList1}></MenuList>}
                        </Col>
                        <Col className="col-6">
                            {menuList2 && <MenuList menuList={menuList2}></MenuList>}
                        </Col>
                    </div>
                </div>
                <Pagination className={"justify-content-center"}>{pageList}</Pagination>
            </div>
        </>
    );
};
export default Menu;
