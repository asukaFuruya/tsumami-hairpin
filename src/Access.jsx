import "./access.css";

const Access = () => {
  return (
    <div className="access-container">
      <h2 id="access">アクセス</h2>
      <h3>Access</h3>
      <p>〒169-0075 <p className="sp-break"></p>東京都新宿区高田馬場4-23-28 <p className="sp-break"></p> ヒルズ ISHIDA 401号</p>
      <p>
        営業時間：10:00～17:00
        <br />
        電話番号：03-3361-3083
      </p>
      <p>
        最寄駅
        <br />
        JR 高田馬場駅から徒歩2分
        <br />
        東京メトロ東西線 高田馬場駅から徒歩5分
        <br />
        西武新宿線 高田馬場駅から徒歩5分
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6479.29447473027!2d139.69953191139712!3d35.7102975724635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d3a1ac8e747%3A0x23cbb9da638bb486!2z44Gk44G-44G_44GL44KT44GW44GX5Y2a54mp6aSo!5e0!3m2!1sja!2sjp!4v1763443817850!5m2!1sja!2sjp"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Access;
