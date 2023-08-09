import React from "react";
import CardKelebihan from "@/components/CardKelebihan";
import { kelebihan } from "@/utils/localData";

function KelebihanSection() {
  return (
    <section className="kelebihan">
      <div className="kelebihan__container">
        <article>
          <div className="header">
            <span className="label-14-bold">ABOUT US</span>

            <h2 className="heading-30-bold">Kenapa Memilih Kami</h2>
          </div>
          <div className="content">
            <div className="cards">
              {kelebihan.map((kelebihan, idx) => (
                <CardKelebihan key={idx} kelebihan={kelebihan} />
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default KelebihanSection;
