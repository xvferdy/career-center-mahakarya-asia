import React from "react";
import CardKelas from "@/components/CardKelas";
import { kelas } from "@/utils/localData";

function KelasSection() {
  return (
    <section id="kelas" className="kelas">
      <div className="kelas__container">
        <article>
          <div className="header">
            <span className="label-14-bold">AVAILABLE CLASS</span>
            <h2 className="heading-30-bold">Kelas Untuk Program UpSkill</h2>
          </div>
          <div className="cards">
            {kelas.map((kelas, id) => (
              <CardKelas key={id} kelas={kelas} />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default KelasSection;
