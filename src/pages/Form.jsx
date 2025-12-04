import "./form.css";
import { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Form = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // フォームの値を state で管理
  const [formData, setFormData] = useState(
    location.state || {
      zipcode: "",
      address: "",
      name: "",
      email: "",
      message: "",
    }
  );

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      // 確認ダイアログ
      e.preventDefault();
      e.returnValue = ""; // Chrome 用
  
      // 離脱時にフォームをクリア
      setFormData({
        zipcode: "",
        address: "",
        name: "",
        email: "",
        message: "",
      });
    };
  
    window.addEventListener("beforeunload", handleBeforeUnload);
  
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

// 郵便番号入力時に住所を自動補完
const handleZipChange = async (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));

  // 7桁の数字が入力されたら住所検索
  const zip = value.replace("-", "");
  if (zip.length === 7) {
    try {
      const res = await axios.get(
        `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zip}`
      );
      if (res.data.results) {
        const result = res.data.results[0];
        const address = `${result.address1}${result.address2}${result.address3}`;
        setFormData((prev) => ({ ...prev, address }));
      }
    } catch (err) {
      console.error("郵便番号検索エラー", err);
    }
  }
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // confirmページに state で値を渡す
    navigate("/confirm", { state: formData });
  };
  
  
  return (
    <div className="form-container">
      <h2>申込みフォーム</h2>
      <h3>Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="zip">郵便番号</label>
          <input
            type="text"
            id="zip"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleZipChange}
            placeholder="169-0075"
            required
          />
        </div>
        <div className="form-group">
          <label for="address">住所</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="例：東京都新宿区高田馬場4-23-28"
            required
          />
        </div>
        <div className="form-group">
          <label for="name">氏名</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="つまみ簪博物館"
            required
          />
        </div>
        <div className="form-group">
          <label for="email">メールアドレス</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="例：tomisen@mtj.biglobe.ne.jp"
            required
          />
        </div>
        <div className="form-group">
          <label for="message">ご質問等</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="お気軽にご質問ください"
            rows="15"
          ></textarea>
        </div>
        <button type="submit">確認する</button>
      </form>
    </div>
  );
};
export default Form;
