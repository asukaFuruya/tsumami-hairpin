import "./confirm.css";
import { useLocation, useNavigate } from "react-router-dom";

const Confirm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state; // Formから渡された値

  if (!formData) {
    return <p>フォームデータがありません</p>;
  }

  const handleBack = () => {
    // Formに戻るときに入力データをstateで渡す
    navigate("/form", { state: formData });
  };

  const handleSubmit = () => {
    // ここで送信処理を書く（API呼び出しなど）
    navigate("/complete");
  };


  return (
    <div className="confirm-container">
      <h2>申込みフォーム（確認）</h2>
      <h3>Confirm</h3>
      <div className="confirm-group">
        <p className="confirm-label">郵便番号</p>
        <p>{formData.zipcode}</p>
      </div>
      <div className="confirm-group">
        <p className="confirm-label">住所</p>
         <p>{formData.address}</p>
      </div>
      <div className="confirm-group">
        <p className="confirm-label">氏名</p>
         <p>{formData.name}</p>
      </div>
      <div className="confirm-group">
        <p className="confirm-label">メール</p>
         <p>{formData.email}</p>
      </div>
      <div className="confirm-group">
        <p className="confirm-label">ご質問</p>
         <p>{formData.message}</p>
      </div>
      <div className="confirm-page-button">
        <button className="confirm-page-button-prev" onClick={handleBack}>修正する</button>
        <button className="confirm-page-button-next" onClick={handleSubmit}>送信する</button>
      </div>
    </div>
  );
};

export default Confirm;
