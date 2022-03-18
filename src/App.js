import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import UploadScreen from "./components/UploadScreen";
const App = () => (
  <div className="App">
    <Header />
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UploadScreen />
      {/* <div style={{ minWidth: "50%", minHeight: "600px" }}></div> */}
    </div>
  </div>
);

export default App;
