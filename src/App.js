import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import Home from "./pages/Home";
import About from "./pages/About";
import Secret from "./pages/Secret";

const App = () => {
  // elements info
  const [elements, setElements] = useState([]);
  // available parameters
  const [parameters, setParameters] = useState([])

  useEffect(() => {

      // Read csv file
      // Original csv :
      // https://gist.githubusercontent.com/GoodmanSciences/c2dd862cd38f21b0ad36b8f96b4bf1ee/raw/1d92663004489a5b6926e944c1b3d9ec5c40900e/Periodic%2520Table%2520of%2520Elements.csv
      axios.get("./periodic_table.csv").then((res) => {

          // CSV to JSON
          // https://stackoverflow.com/questions/27979002/convert-csv-data-into-json-format-using-javascript

          // remove "\r"
          var text = res.data.replace("\r", "");
          // use ";" as separator
          var lines = text.split('\n');
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

          // send data to state
          setElements(result);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Path in url */}
        {/* Send data with it */}
        {/* <Route path="/" element={<Home props={elements} parameters={parameters}/>} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/secret" element={<Secret />} />
        <Route path="/*" element={<Home props={elements} parameters={parameters}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
