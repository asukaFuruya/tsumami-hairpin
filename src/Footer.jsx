import "./footer.css";
import { ImgList } from "./assets/img/ImgList";

const Footer = () => {
  return (
    <div className="footer-container">
      <span className="footer-divider"></span>
      <div className="footer-content">
        <p>
          つまみ簪博物館 <p className="sp-break"></p>〒169-0075 <p className="sp-break"></p>東京都新宿区高田馬場4-23-28 ヒルズ ISHIDA
          401号 <p className="sp-break"></p>営業時間：10:00～17:00 <p className="sp-break"></p>電話番号：03-3361-3083
        </p>
        <div class="social-links">
          <a
            href="https://www.facebook.com/edotsumami"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ImgList.facebook} alt="Facebook" />
          </a>

          <a
            href="https://www.instagram.com/shigure.05/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ImgList.instagram} alt="Instagram" />
          </a>

          <a
            href="https://www.youtube.com/channel/@CityShinjuku"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ImgList.youtube} alt="YouTube" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
