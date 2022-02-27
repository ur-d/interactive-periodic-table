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
          alert(allText.split("\n"));
          console.table(
            allText.split("\n").forEach((element) => element.split(";"))
          );
        }
      }
    };
    rawFile.send(null);
  }, []);

  return (
    <div className="table">
      {data.map((element) => (
        <Element element={element} key={element.name} />
      ))}
    </div>
  );
};

export default Table;
