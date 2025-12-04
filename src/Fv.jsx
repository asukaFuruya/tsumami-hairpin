import { ImgList } from "./assets/img/ImgList";
import Menu from "./Menu";
import "./fv.css";

const Fv = () => {
  return (
    <div>
      <Menu />
      <div className="fv-container">
        <img className="fv" src={ImgList.fv} alt="つまみ簪博物館" />
        <div className="title">
          <h1>つまみ簪博物館</h1>
          <h3>Tsumami Kanzashi Museum</h3>
        </div>
      </div>
    </div>
  );
};

export default Fv;
