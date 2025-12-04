import { ImgList } from "../assets/img/ImgList";
import "./newsPage.css";

const News_20250519 = () => {
  return (
    <div className="news-each-container">
      <h2>つまみ簪教室について</h2>
      <h3>2025.5.19</h3>
      <p>
        つまみ簪博物館では<p className="sp-break"></p>１日(半日)だけの体験教室を開催しております。
        <br />
        初心者の方を対象に<p className="sp-break"></p>まずは簪作りの基礎をお教えいたします。
        <br />
        ご希望の方は下記の申込みフォームから<p className="sp-break"></p>ご連絡くださいませ。
      </p>
      <dl>
        <dt>会場</dt>
        <dd>東京・高田馬場（予定）</dd>

        <dt>会期</dt>
        <dd>４月～５月頃</dd>

        <dt>費用</dt>
        <dd>4,000円（材料費込み）</dd>

        <dt>作る物</dt>
        <dd>鶴と蝶</dd>
      </dl>
      <div className="news_20250519-img">
        <img src={ImgList.news_article_img_1} alt="つまみ簪教室" />
        <img src={ImgList.news_article_img_2} alt="つまみ簪教室" />
      </div>
      <a href="/form">
      <button>申込みフォーム</button>
      </a>
    </div>
  );
};

export default News_20250519;
