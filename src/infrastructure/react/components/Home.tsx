import React from "react";

import { ReactComponent } from "../ReactComponent.tsx";
import "./Home.css";

export const Home: ReactComponent = () => {
  const duplicateMasterSpread = () => {
    const app = require("indesign").app;
    const doc = app.activeDocument;
    const masterSpread = doc.masterSpreads.itemByName("I-내지C");
    const leftPage = doc.pages.add();
    leftPage.appliedMaster = masterSpread;
    const rightPage = doc.pages.add();
    rightPage.appliedMaster = masterSpread;
  };

  return (
    <div>
      <p className="display">Congratulations! You just created your first React Plugin.</p>
      <button onClick={duplicateMasterSpread}>Hello</button>
    </div>
  );
}
