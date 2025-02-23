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

  const openYeah = async () => {
    const uxp = require("uxp");
    const storage = uxp.storage;
    const lfs = storage.localFileSystem;
    const folder = await lfs.getFolder();
    const files = await iterateFolder(folder);
    console.log(files);
  }

  const iterateFolder = async (entry) => {
    const entries = await entry.getEntries();
    return entries
      .filter(entry => entry.isFile)
      .concat(
        (await Promise.all(entries.filter(entry => entry.isFolder).map(iterateFolder))).flat()
      );
  }

  return (
    <div>
      <p className="display">Congratulations! You just created your first React Plugin.</p>
      <button onClick={openYeah}>Hello</button>
    </div>
  );
}
