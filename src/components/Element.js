import React, { useEffect } from "react";

const Element = (props) => {
  useEffect(() => {
    alert(props);
  }, []);
  return (
    <div className="element">
      element
      <div></div>
    </div>
  );
};

export default Element;
