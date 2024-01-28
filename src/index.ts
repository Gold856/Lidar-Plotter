import "./my-element";
import { addElements, addThemeRules } from "@frc-web-components/app";

addElements(
  {
    "circle-plotter": {
      dashboard: {
        displayName: "Lidar Plotter",
      },
      properties: {
        points: { type: "Array", primary: true },
      },
    },
  },
  "Lidar Visualizer"
);

addThemeRules("dark", {
  "--circle-plotter-background": "cadetblue",
  "--circle-plotter-color": "black",
});

addThemeRules("light", {
  "--my-lit-element-background": "cornflowerblue",
  "--my-lit-element-color": "white",
});
