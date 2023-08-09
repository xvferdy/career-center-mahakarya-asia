import React from "react";

function CardKelebihan({ kelebihan }) {
  const { icon, title, desc } = kelebihan;
  return (
    <div className="cardKelebihan">
      <div className="cardKelebihan__icon">{icon}</div>
      <p className="body-16-bold title">{title}</p>
      <p className="body-16-reg">{desc}</p>
    </div>
  );
}

export default CardKelebihan;
