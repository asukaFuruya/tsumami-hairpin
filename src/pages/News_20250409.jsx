import { ImgList } from "../assets/img/ImgList";
import "./newsPage.css";

const News_20250409 = () => {
  return (
    <div className="news-each-container">
      <h2>歌の歳時記 2月 寒仕込み</h2>
      <h3>2025.4.9</h3>
      <img src={ImgList.news_article_img_3} alt="寒仕込み" />
      <p>
        このみきを かみけむひとはそのつづみ <p className="sp-break"></p>うすに立てて歌ひつつ かみけむかも
        <br />
        古事記 中巻「酒楽(さかくら）の歌」 <p className="sp-break"></p>武内宿禰
        <br />
        （大意）
        <br />
        この旨酒を醸んだ人は、<p className="sp-break"></p>その鼓を臼として立てて置き、<p className="sp-break"></p>歌いつつ醸んだからであろうか
        <br />
        武内宿禰は、５世代の天皇<p className="sp-break"></p>(景行・成務・仲哀・（神功皇后）<p className="sp-break"></p>・応神・仁徳)に仕え
        <br />
        ３００歳まで生きたという<p className="sp-break"></p>伝説の武将で架空の人物とされる。
        <br />
        従って「作者不詳」が正しいのかもしれない。
        <br />
        「酒楽の歌」は即位前の応神天皇が<p className="sp-break"></p>戰の穢れを落とす<p className="sp-break"></p>禊の地・敦賀から大和へ帰ってくるのを、
        <br />
        母である神功皇后が特別の酒「待ち酒」で<p className="sp-break"></p>迎え宴を開いた。
        <br />
        この宴で神功皇后と武内宿禰が<p className="sp-break"></p>交わした歌とされている。
        <br />
        伝説が正しければ、３世紀頃の話であり<p className="sp-break"></p>「日本最初の酒の歌」と云える。
        <br />
        因みに応神天皇は<p className="sp-break"></p>全国の「八幡神社」のご祭神（武神）とされ、
        <br />
        更に応神天皇の御子が次の天皇・仁徳天皇となる。
      </p>
    </div>
  );
};

export default News_20250409;
