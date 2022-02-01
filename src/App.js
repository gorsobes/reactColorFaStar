import React, { useState } from "react";
import "./styles.css";

import colorData from "./color-data.js";
import ColorList from "./ColorList.js";

export default function App() {
  const [colors] = useState(colorData);

  return (
    <div className="App">
      <ColorList colors={colors} />
    </div>
  );
}
