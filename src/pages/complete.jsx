import "./complete.css";

const Complete = () => {
  return (
    <div className="complete-container">
      <h2>申込みが完了しました</h2>
      <h3>Complete</h3>
      <p>
        ご登録いただいたメールアドレス宛に
        <br />
        確認メールをお送りいたしましたので<p className="sp-break"></p>ご確認下さいませ。
      </p>
      <div className="complete-page-button">
      <a href="/">
      <button className="complete-page-button-prev">
      トップに戻る
      </button>
      </a>
      </div>
    </div>
  );
};

export default Complete;
