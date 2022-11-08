import React, { useState, useEffect } from 'react';

// The left part of the website, containing all of the parameters
const ParametersPart = ({ onSubmit, parameters, availableLanguages, colors, language, otherInfo, dictionary }) => {

    // Data infos list
    const [otherParameters, setOtherParameters] = useState(["None"])
    
    // Currently active settings :
    const [activeSettings, setActiveSettings] = useState({
        "colors": colors,
        "language": language,
        "otherInfo": otherInfo
    });

    // Use to not trigger the useEffect
    var tmpSettings = {}
    
    // Remove always active and uninterresting parameters from the "parameters" array
    useEffect(() => {
        var OP = []
        // Unwanted informations contained in the database
        const filteredParameters = ["AtomicNumber", "Symbol", "AtomicMass", "Radioactive", "Type", "Discoverer", "Year", "NumberofNeutrons", "NumberOfIsotopes"]

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

    // Change the active settings inside of TablePage.js
    const set = (parameterType, parameter) => {
        tmpSettings = activeSettings
        tmpSettings[parameterType] = parameter
        setActiveSettings(tmpSettings)
        onSubmit(parameterType, tmpSettings)
    }

    // Checks if the parameter is the default one
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
                    {/* Others infos parameter */}
                    {dictionary.Data}
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
                                <div className="parameter-name">{dictionary[parameter]}</div>
                            </label>
                        ))
                    }
                </div>
                    
                <div className="parameters-gradiant">
                    {/* Grandient parameter */}
                    {dictionary.Color}
                    <label key={"gradiant"} className={"container set-gradiant"} htmlFor={"gradiant"}>
                        <input
                            type="checkbox"
                            id={"gradiant"}
                            name="parameters-gradiant"
                            defaultChecked={false}
                            onChange={(r) => {
                                set("colors", r.target.checked)
                            }}
                        >
                        </input>
                        <span className="checkmark"></span>
                        <div className="parameter-name">{dictionary["Gradient"]}</div>
                    </label>
                </div>

                <div className="parameters-lang">
                    {/* Language parameter */}
                    {dictionary.Language}
                    <select id='parameters-lang' value={language} onChange={(r) => {
                        var tmpSettings = activeSettings
                        tmpSettings["language"] = r.target.value
                        setActiveSettings(tmpSettings)
                        onSubmit("language", tmpSettings)
                    }}>
                        {availableLanguages
                            .map((parameter) => (
                                <option key={parameter} value={parameter}>
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