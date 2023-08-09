import React from "react";
import Partners from "@/components/Partners";

function HiringPartnersSection() {
  return (
    <section className="partners">
      <div className="partners__container">
        <article>
          <div className="header">
            <p>HIRING PARTNERS</p>
          </div>
          <div className="content">
            <Partners />
          </div>
        </article>
      </div>
    </section>
  );
}

export default HiringPartnersSection;
