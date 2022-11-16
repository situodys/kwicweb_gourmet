import { Link } from "react-router-dom";

export default function Main(props) {
  return (
    <div>
      <h3>메인 페이지 입니다.</h3>
      <ul>
        <Link to={"/example/1"} state={{ variable: 1 }}>
          1번{" "}
        </Link>
        <Link to={"/example/2"} state={{ variable: 2 }}>
          2번{" "}
        </Link>
        <Link to={"/login"}>Login </Link>
      </ul>
    </div>
  );
}
