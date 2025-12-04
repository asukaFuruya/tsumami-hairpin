import "./newsArticle.css";

const NewsArticle = ({ onClick, imgSrc, altText, title, date }) => {
  return (
    <div className="news-article-container" onClick={onClick}>
      <img src={imgSrc} alt={altText} />
      <div className="news-article-text">
        <p>{title}</p>
        <p className="news-article-day">{date}</p>
      </div>
    </div>
  );
};

export default NewsArticle;
