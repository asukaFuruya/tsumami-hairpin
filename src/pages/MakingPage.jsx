import Making from "../Making";
import "./makingPage.css";
import { useState } from "react";
import { makingList } from "../assets/mock/mockData";

const MakingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const changeItem = (newIndex) => {
    setIsFading(true); // フェードアウト開始
    setTimeout(() => {
      setCurrentIndex(newIndex); // 中身切り替え
      setIsFading(false); // フェードイン開始
    }, 500); // 0.5秒後に変更
  };

  const handlePrev = () => {
    const nextIndex = currentIndex === 0 ? makingList.length - 1 : currentIndex - 1;
    changeItem(nextIndex);
  };

  const handleNext = () => {
    const nextIndex = currentIndex === makingList.length - 1 ? 0 : currentIndex + 1;
    changeItem(nextIndex);
  };

  const currentMaking = makingList[currentIndex];

  return (
    <div className="making-page-container">
       <div className={`fade-wrapper ${isFading ? "fade-out" : "fade-in"}`}>
      <Making
        showButton={false}
        title={currentMaking.title}
        img={currentMaking.img}
        alt={currentMaking.alt}
        description={currentMaking.description}
      />
      </div>

      <div className="making-page-button">
        <button className="making-page-button-prev" onClick={handlePrev}>
          前の作品を見る
        </button>
        <button className="making-page-button-next" onClick={handleNext}>
          次の作品を見る
        </button>
      </div>
    </div>
  );
};

export default MakingPage;
