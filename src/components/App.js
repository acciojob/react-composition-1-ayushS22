
import React from "react";
import './../styles/App.css';
import Tabs from './Tabs';

const App = () => {


   const tabsData = [
    { title: "Tab1", content: <p>This is the content for Tab1</p> },
    { title: "Tab2", content: <p>This is the content for Tab2</p> },
    { title: "Tab3", content: <p>This is the content for Tab3</p> },
  ];
  return (
    <div>
        {/* Do not remove the main div */}
        <Tabs tabs={tabsData} />
    </div>
  )
}

export default App
