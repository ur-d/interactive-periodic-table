import React, { useEffect, useState } from 'react';
import Elements from './Elements';

const Table = ({ props, parameters }) => {
    const [activeSettings, setActiveSettings] = useState([]);

    // var settings = activeSettings;
    var settings = {};
    // function getActiveSettings() {
    //     return activeSettings;
    // }

    function defaultValueSwitch(params) {
        switch (params) {
            case "AtomicNumber":
                return true;
            case "Symbol":
                return true;
            case "AtomicMass":
                return true;
            case "Element":
                return true;
            default:
                return false;
        };
    }

    useEffect(() => {
        for (let i = 0; i < parameters.length; i++) {
            settings[parameters[i]] = defaultValueSwitch(parameters[i]);
        }
        setActiveSettings(settings);
    }, [parameters]);

    
    function onInputChange(e) {
        console.log(e.target.id + " " + e.target.checked);
        var activeSettingsVar = activeSettings;
        console.log(activeSettingsVar);
        activeSettingsVar[e.target.id] = e.target.checked
        console.log(activeSettingsVar);
        setActiveSettings(activeSettingsVar);
    }

    return (
        <div className="table">
            <Elements props={props} activeSettings={activeSettings}/>
            <div className="parameters">
                <ul>
                    {parameters
                    .map((parameters) => (
                        <li key={parameters}>
                            <input
                                type="checkbox"
                                id={parameters}
                                name="parameters"
                                defaultChecked={defaultValueSwitch(parameters)}
                                onChange={(e) => (
                                    onInputChange(e)
                                )}></input>
                            <label htmlFor={parameters}>{parameters}</label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Table;