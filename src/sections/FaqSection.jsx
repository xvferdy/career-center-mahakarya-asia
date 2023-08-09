import React from "react";
import Accordion from "@/components/Accordion";
import { faqs } from "@/utils/localData";

function FaqSection() {
  return (
    <section className="faqs">
      <div className="faqs__container">
        <article>
          <div className="header">
            <span className="label-14-bold">HELP CENTER</span>
            <h2 className="heading-30-bold">FAQs</h2>
          </div>
          <div className="content">
            {faqs.map((item, idx) => {
              const { question, answer } = item;
              return (
                <div key={idx} className="accordions">
                  <Accordion question={question} answer={answer}></Accordion>
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
}

export default FaqSection;
