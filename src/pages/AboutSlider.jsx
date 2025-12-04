import { ImgList } from "../assets/img/ImgList";
import "./aboutSlider.css";

const AboutSlider = () => {
  return (
    <div className="about-slider">
      <div className="about-slider-repeat">
        <img className="making_1" src={ImgList.making_1} alt="梅尽くし" />
        <img className="making_2" src={ImgList.making_2} alt="水仙" />
        <img className="making_3" src={ImgList.making_3} alt="夢小鼓" />
        <img className="making_4" src={ImgList.making_4} alt="楠玉" />
        <img className="making_5" src={ImgList.making_5} alt="玉手箱" />
        <img className="making_6" src={ImgList.making_6} alt="花衣" />
        <ul>
          <li className="title_1">梅尽くし</li>
          <li className="title_2">水仙</li>
          <li className="title_3">夢小鼓</li>
          <li className="title_4">楠玉</li>
          <li className="title_5">玉手箱</li>
          <li className="title_6">花衣</li>
        </ul>
        <p className="text_1">
          出来上がった花や蝶は
          <br />
          乾燥させ（半日から一日）、
          <br />
          充分に乾燥したら極天糸(絹糸)で
          <br />
          一本に束ね、簪の形に組み上げます。
        </p>
        <p className="text_2">
          糊板に並べられた
          <br />
          「丸つまみ」「角つまみ」を
          <br />
          ピンセットを使い、厚紙で作った台紙に
          <br />
          置いてゆき花や蝶の形を作ってゆきます。
        </p>
        <p className="text_3">
          組み上げで一本にまとめた物に、
          <br />
          ビラや足(髪に挿す部分)を
          <br />
          極天糸でしっかりと取り付けます。
        </p>
        <p className="text_4">
          「花は花の気持ちになって、
          <br />
          蝶は蝶の気持ちになってふけ。」と
          <br />
          先人は言っています。
        </p>
      </div>
      <div className="about-slider-repeat">
        <img className="making_1" src={ImgList.making_1} alt="梅尽くし" />
        <img className="making_2" src={ImgList.making_2} alt="水仙" />
        <img className="making_3" src={ImgList.making_3} alt="夢小鼓" />
        <img className="making_4" src={ImgList.making_4} alt="楠玉" />
        <img className="making_5" src={ImgList.making_5} alt="玉手箱" />
        <img className="making_6" src={ImgList.making_6} alt="花衣" />
        <ul>
          <li className="title_1">梅尽くし</li>
          <li className="title_2">水仙</li>
          <li className="title_3">夢小鼓</li>
          <li className="title_4">楠玉</li>
          <li className="title_5">玉手箱</li>
          <li className="title_6">花衣</li>
        </ul>
        <p className="text_1">
          出来上がった花や蝶は
          <br />
          乾燥させ（半日から一日）、
          <br />
          充分に乾燥したら極天糸(絹糸)で
          <br />
          一本に束ね、簪の形に組み上げます。
        </p>
        <p className="text_2">
          糊板に並べられた
          <br />
          「丸つまみ」「角つまみ」を
          <br />
          ピンセットを使い、厚紙で作った台紙に
          <br />
          置いてゆき花や蝶の形を作ってゆきます。
        </p>
        <p className="text_3">
          組み上げで一本にまとめた物に、
          <br />
          ビラや足(髪に挿す部分)を
          <br />
          極天糸でしっかりと取り付けます。
        </p>
        <p className="text_4">
          「花は花の気持ちになって、
          <br />
          蝶は蝶の気持ちになってふけ。」と
          <br />
          先人は言っています。
        </p>
      </div>
    </div>
  );
};

export default AboutSlider;
