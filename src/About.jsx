import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <h2 id="about">つまみ簪とは</h2>
      <h3>About Tsumami Kanzashi</h3>
      <p>
        「つまみ簪（かんざし）」とは、<p className="sp-break"></p>薄い小さな絹のキレをピンセットで
        <br />
        つまんで作られる日本（東京都）の伝統工藝品です。
        <br />
        お正月や七五三・成人式・お誕生日のお祝いの時に、<p className="sp-break"></p>着物姿の若い女性の髪を美しく飾ります。
        <br />
        今から２００年ほど昔の江戸時代に<p className="sp-break"></p>髪飾りとして「つまみかんざし」は生まれました。
      </p>
      <a href="/about">
        <button>詳細を見る</button>
      </a>
    </div>
  );
};

export default About;
