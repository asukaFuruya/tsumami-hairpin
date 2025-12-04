import Fv from "../Fv";
import About from "../About";
import Making from "../Making";
import News from "../News";
import Access from "../Access";
import { ImgList } from "../assets/img/ImgList";

const MainPage = () => {
  const firstMaking = {
    title: "梅尽くし",
    img: ImgList.making_1,
    alt: "梅尽くし",
    description: `
    「梅づくし」は、春を告げる梅の花をモチーフにした<p className="sp-break"></p>華やかなつまみ簪（かんざし）です。
    <br />
    紅梅・白梅・薄紅の花々を絹で一輪ずつ丁寧に仕立て、<p className="sp-break"></p>可憐さと上品さを併せ持つ逸品に仕上げました。
    <br />
    古来より「気高さ」や「忍耐」の象徴とされる梅の花が、<p className="sp-break"></p>晴れの日の装いに凛とした美しさを添えます。
    <br />
    成人式や卒業式など、<p className="sp-break"></p>特別な日の髪を彩る伝統の一品です。
  `,
  };

  return (
    <div>
      <Fv />
      <About />
      <Making
        showButton={true}
        title={firstMaking.title}
        img={firstMaking.img}
        alt={firstMaking.alt}
        description={firstMaking.description}
      />
      <News />
      <Access />
    </div>
  );
};
export default MainPage;
