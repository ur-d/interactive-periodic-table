import React, { useState, useEffect } from 'react';

// The left part of the website, containing all of the parameters
const ParametersPart = ({ onSubmit, parameters, availableLanguages, colors, language, otherInfo, dictionary }) => {

    // Data infos list
    const [otherParameters, setOtherParameters] = useState(["None"])
    
    // Currently active settings :
    const [activeSettings, setActiveSettings] = useState({
        "gradient": colors,
        "language": language,
        "otherInfo": otherInfo
    });

    // Use to not trigger the useEffect
    var tmpSettings = {}
    
    // Remove always active and uninterresting parameters from the "parameters" array
    useEffect(() => {
        var OP = []
        // Unwanted informations contained in the database
        const filteredParameters = ["AtomicNumber", "Symbol", "Radioactive", "Type", "Discoverer", "Year", "NumberofNeutrons", "NumberOfIsotopes", "OxidationState"]

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

    const renderParameter = (parameter, type) => {
        return (
            <label key={parameter} className={"container set-" + parameter} htmlFor={parameter}>
                <input
                    type={type}
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
        )
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
                            renderParameter(parameter, "radio")
                        ))
                    }
                </div>
                    
                <div className="parameters-gradient">
                    {/* Grandient parameter */}
                    <label key={"gradient"} className={"container set-gradient"} htmlFor={"gradient"}>
                        <input
                            type="checkbox"
                            id={"gradient"}
                            name="parameters-gradient"
                            defaultChecked={false}
                            onChange={(r) => {
                                set("gradient", r.target.checked)
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