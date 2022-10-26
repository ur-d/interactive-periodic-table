import React, { useState, useEffect } from 'react';

const ParametersPart = ({ onSubmit, parameters, availableLanguages, colors, language, otherInfo, dictionary }) => {

    // Remove always active parameters from the "parameters" array
    const [otherParameters, setOtherParameters] = useState(["None"])
    
    useEffect(() => {
        var OP = []
        const filteredParameters = ["AtomicNumber", "Symbol", "AtomicMass", "Radioactive", "Type", "Discoverer", "Year"]

        for (let i = 0; i < parameters.length; i++) {
            let test = false
            for (let j = 0; j < filteredParameters.length; j++) {
                if (parameters[i] === filteredParameters[j] || parameters[i].startsWith("ElementName")) {
                    test = true
                }
            }
            if (!test) {
                OP.push(parameters[i])
            }
        }
        setOtherParameters(OP)
    }, [parameters])

    const spectrumParameters = ["Type", "Electronegativity", "AtomicRadius"]
    
    const [activeSettings, setActiveSettings] = useState({
        "colors": colors,
        "language": language,
        "otherInfo": otherInfo
    });
    var tmpSettings = {}


    const set = (parameterType, parameter) => {
        tmpSettings = activeSettings
        tmpSettings[parameterType] = parameter
        setActiveSettings(tmpSettings)
        onSubmit(parameterType, tmpSettings)
    }

    const isDefaultCheck = (section, param) => {
        if (section === "otherInfo" && param === activeSettings["otherInfo"]) {
            return true
        }
        else if (section === "colors" && param === activeSettings["colors"]) {
            return true
        }
        else if (section === "language" && param === activeSettings["language"]) {
            return true
        }
        else {return false}
    }


    return (
        <div className="ParametersPart">
            {/* ParametersPart */}
            <div className="parameters">
                {/* Parameters */}
                <div className="parameters-other">
                    {dictionary[language].Data}
                    {/* parameters-other */}
                    {otherParameters
                        .map((parameter) => (
                            <label key={parameter} className={"container set-" + parameter} htmlFor={parameter}>
                                <input
                                    type="radio"
                                    id={parameter}
                                    name="parameters-other"
                                    defaultChecked={isDefaultCheck("otherInfo", parameter)}
                                    onChange={() => {
                                        set("otherInfo", parameter)
                                    }}
                                >
                                </input>
                                <span className="checkmark"></span>
                                <div className="parameter-name">{dictionary[language][parameter]}</div>
                            </label>
                        ))
                    }
                </div>
                    
                <div className="parameters-spectrum">
                    {dictionary[language].Color}
                    {/* parameters-spectrum */}
                    {spectrumParameters
                        .map((parameter) => (
                            <label key={parameter + "-spectrum"} className={"container set-" + parameter + "-spectrum"} htmlFor={parameter + "-spectrum"}>
                                <input
                                    type="radio"
                                    id={parameter + "-spectrum"}
                                    name="parameters-spectrum"
                                    defaultChecked={isDefaultCheck("colors", parameter)}
                                    onChange={() => {
                                        set("colors", parameter)
                                    }}
                                >
                                </input>
                                <span className="checkmark"></span>
                                <div className="parameter-name">{dictionary[language][parameter]}</div>
                            </label>
                        ))
                    }
                </div>

                <div className="parameters-lang">
                    {dictionary[language].Language}
                    <select id='parameters-lang' value={language} onChange={(r) => {
                        document.title = dictionary[r.target.value].PTEI; 
                        var tmpSettings = activeSettings
                        tmpSettings["language"] = r.target.value
                        setActiveSettings(tmpSettings)
                        onSubmit("language", tmpSettings)

                        }} >
                        {availableLanguages
                            .map((parameter) => (
                                <option key={parameter} value={parameter} >
                                    {parameter}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ParametersPart;