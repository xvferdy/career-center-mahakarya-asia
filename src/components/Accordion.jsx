"use client";

import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

function Accordions({ question, answer }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div onClick={() => setShow(!show)} className="accordion">
        <div className="accordion__question">
          <p>{question}</p>

          <BiChevronDown
            className={`text-3xl transition-all duration-500 ${
              show ? "rotate-180" : ""
            }`}
          ></BiChevronDown>
        </div>

        <div className="accordion__answer">
          <AnimatePresence>
            {show && (
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="divider"></div>
                {answer}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default Accordions;
