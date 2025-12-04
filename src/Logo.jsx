import { Link } from "react-router-dom";
import { ImgList } from "./assets/img/ImgList";
import "./logo.css";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img className="logo_pc" src={ImgList.logo_pc} alt="つまみ簪" />
        <img className="logo_sp" src={ImgList.logo_sp} alt="つまみ簪" />
      </Link>
    </div>
  );
};
export default Logo;
