
import React from "react";
import './../styles/App.css';
import Tabs from './Tabs';

const App = () => {


   const tabsData = [
    { title: "Tab1", content: "This is the content for Tab1." },
    { title: "Tab2", content: "This is the content for Tab2." },
    { title: "Tab3", content: "This is the content for Tab3." },
  ];
  return (
    <div>
        {/* Do not remove the main div */}
        <Tabs tabs={tabsData} />
    </div>
  )
}

export default App
