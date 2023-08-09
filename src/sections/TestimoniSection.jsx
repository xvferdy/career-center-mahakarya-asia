import React from "react";
import { testimonials } from "@/utils/localData";
import Testimonials from "@/components/Testimonials";

function TestimoniSection() {
  return (
    <section className="testimoni">
      <div className="testimoni__container">
        <article>
          <div className="header">
            <span className="label-14-bold">TESTIMONIALS</span>
            <h2 className="heading-30-bold">Apa Kata Mereka</h2>
          </div>
          <div className="content">
            <Testimonials testimonials={testimonials} />
          </div>
        </article>
      </div>
    </section>
  );
}

export default TestimoniSection;
