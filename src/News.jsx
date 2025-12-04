import "./news.css";
import NewsArticle from "./NewsArticle";
import { ImgList } from "./assets/img/ImgList";
import { useNavigate } from "react-router-dom";

const News = () => {
  const navigate = useNavigate();

  const goToNews20250519 = () => {
    navigate("/news_20250519");
  };

  const goToNews20250409 = () => {
    navigate("/news_20250409");
  };

  const goToNews20250313 = () => {
    navigate("/news_20250313");
  };

  return (
    <div className="news-container">
      <h2 id="news">お知らせ</h2>
      <h3>News</h3>
      <div>
        <NewsArticle
          onClick={goToNews20250519}
          imgSrc={ImgList.news_article_img_1}
          altText="つまみ簪教室"
          title="つまみ簪教室について"
          date="2025.5.19"
        />
        <span className="news-divider"></span>
        <NewsArticle
          onClick={goToNews20250409}
          imgSrc={ImgList.news_article_img_3}
          altText="寒仕込み"
          title="歌の歳時記 2月 寒仕込み"
          date="2025.4.9"
        />
        <span className="news-divider"></span>
        <NewsArticle
          onClick={goToNews20250313}
          imgSrc={ImgList.news_article_img_4}
          altText="椿"
          title="歌の歳時記 1月 椿"
          date="2025.3.13"
        />
      </div>
    </div>
  );
};

export default News;
