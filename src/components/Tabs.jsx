"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Tabs({ alur }) {
  const [selectedTab, setSelectedTab] = useState(1);
  const [tuple, setTuple] = useState([null, selectedTab]);

  if (tuple[1] !== selectedTab) {
    setTuple([tuple[1], selectedTab]);
  }

  // console.log(tuple);

  let prev = tuple[0];
  let flow = selectedTab > prev ? "nextStep" : "prevStep";

  console.log(flow);

  return (
    <div className="tabs">
      <div className="tabs__list">
        {alur.map((el, idx) => (
          <button
            key={idx}
            // className="selectedTab btn--chip"
            className={
              el.id === selectedTab
                ? "tab btn--chip btn--chip--active"
                : "tab btn--chip"
            }
            onClick={() => setSelectedTab(el.id)}
          >
            {el.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait" custom={flow}>
        {alur.map(
          (el, idx) =>
            selectedTab === idx + 1 && (
              <motion.div
                key={idx}
                className="tabs__details"
                // initial={{ opacity: 0, y: 10 }}
                // animate={{ opacity: 1, y: 0, x: "1px" }}
                // exit={{ opacity: 0, y: -10 }}
                // transition={{ type: "spring", duration: 0.5, bounce: 0.5 }}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={flow}
                // transition={{ duration: 1 }}
              >
                <p className="tabs__details-title">{el.title}</p>
                <p className="tabs__details-paragraph1">{el.paragraph1}</p>
                <p className="tabs__details-paragraph2">{el.paragraph2}</p>
              </motion.div>
            )
        )}
      </AnimatePresence>
    </div>
  );
}

let variants = {
  enter: (flow) => ({
    opacity: 0,
    x: flow === "nextStep" ? 100 : -100,
    y: "2px",
  }),
  center: { opacity: 1, x: 0, y: "2px" },
  exit: (flow) => ({
    opacity: 0,
    x: flow === "nextStep" ? -100 : 100,
    y: "2px",
  }),
};

export default Tabs;
