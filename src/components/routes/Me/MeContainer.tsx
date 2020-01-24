import React, { useState } from "react";
import Me from "./Me";

const MeContainer = () => {
  const [visibleTab, setVisibleTab] = useState("news");

  return <Me visibleTab={visibleTab}></Me>;
};

export default MeContainer;
