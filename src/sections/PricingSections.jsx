import React from "react";
import CardPricing from "@/components/CardPricing";
import { pricing } from "@/utils/localData";

function PricingSections() {
  return (
    <section className="pricing">
      <div className="pricing__container">
        <article>
          <div className="header">
            <span className="label-14-bold">CAREER CENTER PROGRAM</span>
            <h2 className="heading-30-bold">
              Program Career Center Yang Bisa Kamu Ikutin
            </h2>
          </div>
          <div className="content">
            <p className="body-16-reg">
              Ada 3 paket di dalam Career Center Mahakarya yang bisa kamu pilih
              mulai dari UpSkill dengan mengikuti kelas Reguler dan ISA atau
              hanya mau program penyaluran saja
            </p>

            <div className="cards">
              {pricing.map((program, idx) => (
                <CardPricing key={idx} {...program} />
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default PricingSections;
