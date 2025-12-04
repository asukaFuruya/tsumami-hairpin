import { useState } from "react";
import "./menu.css";
import {ImgList} from "../src/assets/img/ImgList";

const Menu = () => {
  const [open, setOpen] = useState(false);

    // ハンバーガー画像クリックで開閉
    const toggleMenu = () => {
      setOpen(!open);
    };
  
  
  return (
    <div className="menu-container">
{/* ハンバーガーボタン（スマホのみ表示） */}
      <div className="hamburger" onClick={toggleMenu}>
      <img src={ImgList.hairpin} alt="ハンバーガーメニュー" className={`hairpin_r ${open ? "open" : ""}`} />
      <img src={ImgList.hairpin} alt="ハンバーガーメニュー" className={`hairpin_l ${open ? "open" : ""}`}/>
      </div>
      {/* ナビゲーションメニュー */}
      <ul className={open ? "open" : ""}>
        <li><a href="#about">つまみ簪とは</a></li>
        <li><a href="#making">作品紹介</a></li>
        <li><a href="#news">お知らせ</a></li>
        <li><a href="#access">アクセス</a></li>
      </ul>
    </div>
  );
};
export default Menu;
