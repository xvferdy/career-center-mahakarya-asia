"use client";

import React, { useState } from "react";

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
      {alur.map(
        (el, idx) =>
          el.label === selectedTab && (
            <div key={idx} className="tabs__details">
              <p className="tabs__details-title">{el.title}</p>
              <p className="tabs__details-paragraph1">{el.paragraph1}</p>
              <p className="tabs__details-paragraph2">{el.paragraph2}</p>
            </div>
          )
      )}
    </div>
  );
}

export default Tabs;
