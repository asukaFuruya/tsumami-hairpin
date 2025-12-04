import { ImgList } from "../assets/img/ImgList";
import "./newsPage.css";

const News_20250313 = () => {
  return (
    <div className="news-each-container">
      <h2>歌の歳時記 1月 椿</h2>
      <h3>2025.3.13</h3>
      <img src={ImgList.news_article_img_4} alt="つまみ簪教室" />
      <p>
        巨勢山のつらつら椿つらつらに<p className="sp-break"></p>見つつ偲はな巨勢の春野を
        <br />
        万葉集 １巻ー５４ 坂門人足
        <br />
        （大意）
        <br />
        巨勢山のたくさん連なって咲いている椿、<p className="sp-break"></p>よくよく見て偲びましょう
        <br />
        この歌は、701年に持統上皇の紀伊行幸に<p className="sp-break"></p>同行した際に詠まれたとされる。
        <br />
        花の無い秋に満開の春を思って詠んだ。
        <br />
        「ヤブツバキ系」花が漏斗状に咲く。<p className="sp-break"></p>「ユキツバキ系」花が開いて咲く。
        <br />
        冬の花の少ない時期に、<p className="sp-break"></p>艶やかな葉に赤い花を咲かせる椿は<p className="sp-break"></p>霊力があるとされ、
        <br />
        「延命長寿の花」とされた。
        <br />
        神話では、妖怪を倒すのに<p className="sp-break"></p>椿の木で作った木槌を使ったとされる。
        <br />
        光沢のある葉が特徴で<p className="sp-break"></p>「厚葉木（あつばき）」「艶葉木（つやばき）」
        <br />
        「光沢木（つやき）」が語源とされる。
        <br />
        「椿」の字を「つばき」に当てたのは日本独自で、<p className="sp-break"></p>中国では違う植物をさしている。
        <br />
        正月を飾る花だが、俳句では３月の季語。
      </p>
    </div>
  );
};

export default News_20250313;
