import React, { useState } from "react";

function Tabs({ tabs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {/* Tab titles */}
      <ul>
        {tabs.map((tab, index) => (
          <li key={index}>
            <button
              style={{ border: "none", background: "none", fontSize: "16px" }}
              onClick={() => setActiveIndex(index)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      {/* Active tab content */}
      <div style={{ paddingLeft: "10px", fontSize: "18px" }}>
        {tabs[activeIndex].content}
      </div>
    </div>
  );
}

export default Tabs;
