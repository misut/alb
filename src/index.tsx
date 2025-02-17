
import { Demos } from "./infrastructure/react/components/Demos.tsx";
import { ReactPanel } from "./infrastructure/react/ReactPanel.tsx";

import { entrypoints } from "uxp";

const reactPanel = new ReactPanel(Demos);

entrypoints.setup({
  plugin: {
    create(plugin) {
      console.log("created", plugin);
    },
    destroy() {
      console.log("destroyed");
    }
  },
  panels: {
    demos: reactPanel
  },
  commands: {}
});
