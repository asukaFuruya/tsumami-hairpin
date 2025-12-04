import "./making.css";

const Making = ({ showButton = false, title, img, alt, description }) => {


  return (
    <div className="making-container">
      <h2 id="making">作品紹介</h2>
      <h3>Making Introduce</h3>
      <img src={img} alt={alt} />
      <h4>{title}</h4>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>

      {showButton && (
        <a href="/making">
          <button>詳細を見る</button>
        </a>
      )}
    </div>
  );
};

export default Making;
