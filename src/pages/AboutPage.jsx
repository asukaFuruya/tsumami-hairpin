import "./aboutPage.css";
import About from "../About";
import { ImgList } from "../assets/img/ImgList";
import AboutSlider from "./AboutSlider";

const AboutPage = () => {

  return (
    <div className="about-page-container">
      <About />
      <div className="about-slider-container">
        <AboutSlider />
      </div>
    </div>
  );
};

export default AboutPage;
