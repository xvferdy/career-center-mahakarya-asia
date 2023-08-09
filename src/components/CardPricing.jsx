import React from "react";
import Link from "next/link";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { RxOpenInNewWindow } from "react-icons/rx";

function CardPricing({ name, id, desc, price, ogPrice, features }) {
  return (
    <div className="cardPricing">
      <div className="cardPricing__copy">
        <div className="cardPricing__copy-program">
          <span className="label-16-bold">{name}</span>
        </div>
        <div className="cardPricing__copy-price">
          <div className="cardPricing-container">
            <div className="prices">
              <div className="discount">{price}</div>
              <div className="og">{ogPrice}</div>
            </div>
            <p className="desc body-14-bold">{desc}</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="cardPricing__copy-features">
          <span className="label-12-bold">KEY FEATURES</span>
          <ul>
            {features.map((li, idx) => (
              <li key={idx}>
                <BsFillPatchCheckFill />
                {li}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="cardPricing__cta">
        <Link
          className="btn btn--primary"
          href={`https://wa.me/6281326301616?text=Halo kak saya mau daftar program career center mahakarya`}
          target="_blank"
        >
          Pilih paket ini <RxOpenInNewWindow />
        </Link>
      </div>
    </div>
  );
}

export default CardPricing;
