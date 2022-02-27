import React, { useState } from "react";
import Parameter from "./Parameter";

const Settings = () => {
  const [data, setData] = useState([]);

  return (
    <div className="settings">
      <Parameter />
    </div>
  );
};

export default Settings;
