import React from "react";

import { WC } from "./WC.tsx";

import "./Home.css";

export const Home = () => {
  const duplicateMasterSpread = () => {
    const app = require("indesign").app;
    const doc = app.activeDocument;
    const masterSpread = doc.masterSpreads.itemByName("H-내지B");
    const leftPage = doc.pages.add();
    leftPage.appliedMaster = masterSpread;
    const rightPage = doc.pages.add();
    rightPage.appliedMaster = masterSpread;
  };

  return (
    <div>
      <WC>
        <p className="display">Congratulations! You just created your first React Plugin.</p>
        <button onClick={duplicateMasterSpread}>Hello</button>
      </WC>
    </div>
  );
}
