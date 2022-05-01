import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import Home from "./pages/Home";
import About from "./pages/About";
import Secret from "./pages/Secret";

const App = () => {
  const [elements, setElements] = useState([]);
  const [parameters, setParameters] = useState([])

  useEffect(() => {

      // Read csv file
      axios.get("./periodic_table.csv").then((res) => {

          // CSV to JSON
          // https://stackoverflow.com/questions/27979002/convert-csv-data-into-json-format-using-javascript

          var lines = res.data.split('\r\n');
          var keys = lines[0].split(';');
          setParameters(keys);
          var result = [];

          for(var i=1;i<lines.length-1;i++){
              var obj = {};
              var currentline=lines[i].split(";");
              for(var j=0;j<keys.length;j++){
                  obj[keys[j]] = currentline[j];
              }
              result.push(obj);
          }

          // set data
          setElements(result);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Path */}
        <Route path="/" element={<Home props={elements} parameters={parameters}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/secret" element={<Secret />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
