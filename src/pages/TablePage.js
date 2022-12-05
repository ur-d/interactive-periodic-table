import React, { useState, useEffect } from "react";
import TablePart from "../components/TablePart";
import ParametersPart from "../components/ParametersPart";
import Footer from "../components/Footer";
import axios from "axios";

// The main components, reads the databases, calls the parts, and render the colors caption
const TablePage = () => {
    
    // Preselected settings :
    const [otherInfo, setOtherInfo] = useState("Electronegativity")
    const [language, setLanguage] = useState("FR")
    const [colors, setColors] = useState(false)
    
    // constants :
    const [elements, setElements] = useState([])
    const [parameters, setParameters] = useState([])
    const [availableLanguages, setAvailableLanguages] = useState([])
    const [dictionary, setDictionary] = useState({})
    
    // To let the website reads the databases
    const [isLoading, setLoading] = useState(true)

    // Reads the databases
    useEffect(() => {
        // The element's datas
        axios.get("./periodic_table.csv").then((res) => {
            // CSV to JSON
            // https://stackoverflow.com/questions/27979002/convert-csv-data-into-json-format-using-javascript
            var text = res.data.replace("\r", "")
            var lines = text.split('\n')
            var k = lines[0].split(';')
            setParameters(k)
            var result = []
            var obj
            var currentline
            for(let i=1;i<lines.length-1;i++){
                obj = {}
                currentline = lines[i].split(";")
                for(let j = 0; j < k.length; j++){
                    obj[k[j]] = currentline[j]
                }
                result.push(obj)
            }
            setElements(result)
        })

        // The languages, dictionary
        axios.get("./languages.csv").then((res) => {
            var csv = res.data.replace("\r", "")
            var slices = csv.split("\n")
            var keys = []
            var langs = []
            var result = {}
            for (let k = 1; k < slices.length; k++) {
                keys.push(slices[k].split(';')[0])
            }
            var obj
            for (let i = 1; i < slices[0].split(';').length; i++) {
                obj = {}
                langs.push(slices[0].split(';')[i])
                for (let j = 1; j < slices.length - 1; j++) {
                    obj[keys[j-1]] = slices[j].split(';')[i]
                }
                result[langs[i-1]] = obj
            }
            // Set languages lifetime
            setAvailableLanguages(langs)
            setDictionary(result)
        })
        // Wait for the read to finish
        setTimeout(() => {
            setLoading(false)
        }, 300);
    }, [])

    // Change tab title with language
    useEffect(() => {
        if (isLoading) {
            return
        }
        document.title = dictionary[language].PTEI;
    }, [language, dictionary, isLoading])

    // Fonctions to send the selected datas from ParametersPart to here
    const getData = (parameterType, data) => {
        if (parameterType === "gradient") {
            setColors(data.gradient)
        }
        else if (parameterType === "language") {
            setLanguage(data.language)
        }
        else if (parameterType === "otherInfo") {
            setOtherInfo(data.otherInfo)
        }
    }

    // Colors caption
    const infoRender = () => {
        // Type colors
        if (colors === false) {
            // Colors list
            const typeList = ["Other", "AlkaliMetal", "AlkalineEarthMetal", "TransitionMetal", "Metal", "Metalloid", "Nonmetal", "Halogen", "NobleGas", "Lanthanide", "Actinide"]
            var output = []
            for (let i = 0; i < typeList.length; i++) {
                output.push(<div key={typeList[i]} className="room"><div className={"color " + typeList[i]}></div>{dictionary[language][typeList[i]]}</div>)
            }
            return (<div className="InfoTypePart">{output}</div>)
        }
        // Grandient colors
        else if (colors === true) {
            return (
                <div className="InfoTypePart">
                    <div className="room"><div className="color" style={{backgroundColor: "rgb(0, 255, 0)"}}></div>
                        {dictionary[language].MinimumValue}
                    </div>
                    <div className="room"><div className="color" style={{backgroundColor: "rgb(255, 0, 255)"}}></div>
                        {dictionary[language].MaximumValue}
                    </div>
                    <div className="room"><div className="color Other"></div>
                        {dictionary[language].UndefinedValue}
                    </div>
                </div>
                )
        }
    }

    // Show a loading screen when the databases aren't readed
    if (isLoading) {
        return (
            <div className="Loading">Loading...</div>
        )
    }

    return (
        <div className="TablePage">
            {/* TablePage */}
            <div className="moving">
                <div className="left">
                    {/* Parameters */}
                    <ParametersPart onSubmit={getData} parameters={parameters} availableLanguages={availableLanguages} colors={colors} language={language} otherInfo={otherInfo} dictionary={dictionary[language]} />
                    {/* Captions */}
                    <div className="InfoPart">
                        {infoRender()}
                    </div>
                </div>
                {/* Elements */}
                <TablePart props={elements} colors={colors} otherInfo={otherInfo} dictionary={dictionary[language]} />
            </div>
            {/* Credits */}
            <Footer dictionary={dictionary[language]} />
        </div>
    );
    // }
};

export default TablePage;