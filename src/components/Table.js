import React, { useEffect, useState } from "react";
import Element from "./Element";

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "./periodic_table.csv", false);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status === 0) {
          var allText = rawFile.responseText;
          setData(allText.split("\n"));
        }
      }
    };
    rawFile.send(null);
  }, []);

  return (
    <div className="table">
      {data.map((element) => (
        <Element element={element} key={element.split(",")} />
      ))}
    </div>
  );
};

export default Table;
