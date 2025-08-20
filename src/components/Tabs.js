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
                style={{
                  border: "none",
                  background: "none",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
                onClick={() => setActiveIndex(index)}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
     

      {/* Active tab content show kro yaha */}
        {tabs[activeIndex].content}
     
    </div>
  );
}

export default Tabs;
