import React, { useState, useEffect } from "react";
import TablePart from "../components/TablePart";
import ParametersPart from "../components/ParametersPart";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

const TablePage = () => {
    const [isLoading, setLoading] = useState(true)

    const [colors, setColors] = useState("Type")
    const [language, setLanguage] = useState("FR")
    const [otherInfo, setOtherInfo] = useState("Electronegativity")

    const [elements, setElements] = useState([])
    const [parameters, setParameters] = useState([])
    const [availableLanguages, setAvailableLanguages] = useState([])
    const [dictionary, setDictionary] = useState({})

    useEffect(() => {
        axios.get("./periodic_table.csv").then((res) => {
  
            // CSV to JSON
            // https://stackoverflow.com/questions/27979002/convert-csv-data-into-json-format-using-javascript
            var text = res.data.replace("\r", "")
            var lines = text.split('\n')
            var k = lines[0].split(';')
            setParameters(k)
            var result = []
  
            for(var i=1;i<lines.length-1;i++){
                var obj = {}
                var currentline = lines[i].split(";")
                for(var j = 0; j < k.length; j++){
                    obj[k[j]] = currentline[j]
                }
                result.push(obj)
            }
            setElements(result)
        })

        axios.get("./languages.csv").then((res) => {
            var csv = res.data.replace("\r", "")
            var slices = csv.split("\n")
            var keys = []
            var langs = []
            var result = {}
            for (let k = 1; k < slices.length; k++) {
                keys.push(slices[k].split(';')[0])
            }
            for (let i = 1; i < slices[0].split(';').length; i++) {
                langs.push(slices[0].split(';')[i])
                var obj = {}
                for (let j = 1; j < slices.length - 1; j++) {
                    obj[keys[j-1]] = slices[j].split(';')[i]
                }
                result[langs[i-1]] = obj
            }

            setAvailableLanguages(langs)
            setDictionary(result)
        })
        setTimeout(() => {
            setLoading(false)
        }, 300);
    }, [])

    const getData = (parameterType, data) => {
        // setActiveSettings(data)
        // console.log("getdata")
        // console.log(data)
        // console.log("/getdata")
        if (parameterType === "colors") {
            setColors(data.colors)
        }
        else if (parameterType === "language") {
            setLanguage(data.language)
        }
        else if (parameterType === "otherInfo") {
            setOtherInfo(data.otherInfo)
        }
    }

    const infoRender = () => {
        if (colors === "Type") {
            return (
                <div className="InfoTypePart">
                    <div className="room"><div className="color Other"></div>               {dictionary[language].Other}              </div>
                    <div className="room"><div className="color AlkaliMetal"></div>         {dictionary[language].AlkaliMetal}        </div>
                    <div className="room"><div className="color AlkalineEarthMetal"></div>  {dictionary[language].AlkalineEarthMetal} </div>
                    <div className="room"><div className="color TransitionMetal"></div>     {dictionary[language].TransitionMetal}    </div>
                    <div className="room"><div className="color Metal"></div>               {dictionary[language].Metal}              </div>
                    <div className="room"><div className="color Metalloid"></div>           {dictionary[language].Metalloid}          </div>
                    <div className="room"><div className="color Nonmetal"></div>            {dictionary[language].Nonmetal}           </div>
                    <div className="room"><div className="color Halogen"></div>             {dictionary[language].Halogen}            </div>
                    <div className="room"><div className="color NobleGas"></div>            {dictionary[language].NobleGas}           </div>
                    <div className="room"><div className="color Lanthanide"></div>          {dictionary[language].Lanthanide}         </div>
                    <div className="room"><div className="color Actinide"></div>            {dictionary[language].Actinide}           </div>
                    {/* translathanide */}
                </div>
                )
        }
        else if (colors === "AtomicRadius") {
            return (
                <div className="InfoTypePart">
                    not final colors
                    <div className="room"><div className="color"></div>     {dictionary[language].LowAtomicRadius}    </div>
                    <div className="room"><div className="color"></div>     {dictionary[language].HighAtomicRadius}   </div>
                    <div className="room"><div className="color Other"></div>     {dictionary[language].UnknownAtomicRadius}   </div>
                </div>
                )
        }
        else if (colors === "Electronegativity") {
            return (
                <div className="InfoTypePart">
                    not final colors
                    <div className="room"><div className="color"></div>     {dictionary[language].LowElectronegativity}     </div>
                    <div className="room"><div className="color"></div>     {dictionary[language].HighElectronegativity}    </div>
                </div>
                )
        }
    }

    if (isLoading) {
        return (
            <div className="Loading">Loading...</div>
        )
    }

    return (
        <div className="TablePage">
            <Header />
            {/* TablePage */}
            <div className="moving">
                <div className="left">
                    <ParametersPart onSubmit={getData} parameters={parameters} availableLanguages={availableLanguages} colors={colors} language={language} otherInfo={otherInfo} dictionary={dictionary} />
                    <div className="InfoPart">
                        {infoRender()}
                    </div>
                </div>
                <TablePart props={elements} colors={colors} language={language} otherInfo={otherInfo} dictionary={dictionary} />
            </div>
            <Footer language={language} dictionary={dictionary} />
        </div>
    );
    // }
};

export default TablePage;