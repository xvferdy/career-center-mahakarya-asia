"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Tabs({ alur }) {
  const [selectedTab, setSelectedTab] = useState("1. Pendaftaran");
  return (
    <div className="tabs">
      <div className="tabs__list">
        {alur.map((el, idx) => (
          <button
            key={idx}
            // className="selectedTab btn--chip"
            className={
              el.label === selectedTab
                ? "tab btn--chip btn--chip--active"
                : "tab btn--chip"
            }
            onClick={() => setSelectedTab(el.label)}
          >
            {el.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {alur.map(
          (el, idx) =>
            el.label === selectedTab && (
              <motion.div
                key={idx}
                className="tabs__details"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0.5 }}
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

export default Tabs;
