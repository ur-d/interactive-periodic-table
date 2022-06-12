import React, { useEffect, useState } from 'react';
import Elements from './Elements';

// main body

const Table = ({ props, parameters }) => {
    // activated settings
    const [activeSettings, setActiveSettings] = useState([]);

    var settings = {};

    // Default settings
    function defaultValueSwitch(params) {
        switch (params) {
            case "AtomicNumber":
                return true;
            case "Symbol":
                return true;
            case "AtomicMass":
                return true;
            case "ElementName":
                var userLang = navigator.language || navigator.userLanguage; 
                if (userLang == "fr") {
                    return false;
                }
                else {
                    return true;
                }
            case "FR":
                var userLang = navigator.language || navigator.userLanguage; 
                if (userLang == "fr") {
                    return true;
                }
                else {
                    return false;
                }
            case "Type":
                return true;
            case "Radioactive":
                return true;
            default:
                return false;
        };
    }

    useEffect(() => {
        for (let i = 0; i < parameters.length; i++) {
            settings[parameters[i]] = defaultValueSwitch(parameters[i]);
        }
        // add spectrum settings
        settings["atomicRadiusSpectrum"] = false;
        settings["electroNegativitySpectrum"] = false;
        // set default settings
        setActiveSettings(settings);
    }, [parameters]);

    // when a settings change
    function onInputChange(e) {
        var activeSettingsVar = activeSettings;
        activeSettingsVar[e.target.id] = e.target.checked
        // set new active settings
        setActiveSettings(activeSettingsVar);
    }

    // render "other" parameters
    function RenderParameters(parameters) {
        // check if not a "special" parameter
        if (parameters == "AtomicNumber" || parameters == "Symbol" || parameters == "AtomicMass" || parameters == "ElementName" || parameters == "Type"|| parameters == "Radioactive" || parameters == "FR") {
        }
        else {
            return (
            <label key={parameters} className={"container set-" + parameters} htmlFor={parameters}>
                <input
                    type="checkbox"
                    id={parameters}
                    name="parameters"
                    defaultChecked={defaultValueSwitch(parameters)}
                    onChange={(e) => (
                        onInputChange(e)
                    )}>
                </input>
                <span className="checkmark"></span>
                {parameters}
            </label>
            )
        }
    }
    // https://stackoverflow.com/questions/8199760/how-to-get-the-browser-language-using-javascript

    // var userLang = navigator.language || navigator.userLanguage; 
    // alert ("The language is: " + userLang);

    // https://www.w3schools.com/howto/howto_css_custom_checkbox.asp
    return (
        <div className="table">
            {/* div margin */}
            <div className="left-margin"></div><div className="mid-margin"></div><div className="right-margin"></div>
            {/* call "Elements" and sending it data */}
            <Elements props={props} activeSettings={activeSettings}/>
            <div className="parameters-part">
                {/* logo ? */}
                {/* <div className="Logo">
                    <img className="logo-img" src="images/logo192.png" alt="logo" />
                    TPint
                </div> */}

                {/* parameters part */}
                <div className="parameters">
                    {/* "other" parameters part */}
                    <div className="parameters-other">
                        {parameters
                            // render each parameter
                            .map((parameters) => (
                                RenderParameters(parameters)
                            ))
                        }
                    </div>
                    
                    {/* "spectrum" parameter part */}
                    <div className="parameters-spectrum">
                        {/* "default spectrum", background color for type of element */}
                        <label key="Type" className={"container set-Type"} htmlFor="Type">
                            <input
                                type="checkbox"
                                id="Type"
                                name="parameters"
                                defaultChecked={defaultValueSwitch("Type")}
                                onChange={(e) => (
                                    onInputChange(e)
                                )}>
                            </input>
                            <span className="checkmark"></span>
                            Type
                        </label>
                        {/* "spectrum" for atomic radius */}
                        <label key="atomicRadiusSpectrum" className="container set-atomicRadiusSpectrum" htmlFor="atomicRadiusSpectrum">
                            <input
                                type="checkbox"
                                id="atomicRadiusSpectrum"
                                name="parameters"
                                defaultChecked={defaultValueSwitch("atomicRadiusSpectrum")}
                                onChange={(e) => (
                                    onInputChange(e)
                                )}
                            >
                            </input>
                            <span className="checkmark"></span>
                            Atomic Radius
                        </label>
                        {/* "spectrum" for electronegativity */}
                        <label key="electroNegativitySpectrum" className="container set-electroNegativitySpectrum" htmlFor="electroNegativitySpectrum">
                            <input
                                type="checkbox"
                                id="electroNegativitySpectrum"
                                name="parameters"
                                defaultChecked={defaultValueSwitch("electroNegativitySpectrum")}
                                onChange={(e) => (
                                    onInputChange(e)
                                )}
                            >
                            </input>
                            <span className="checkmark"></span>
                            Electronegativity
                        </label>
                    </div>

                    {/* "language" parameter part */}
                    <div className="parameters-lang">
                        {/* English */}
                        <label key="ElementName" className={"container set-ElementName"} htmlFor="ElementName">
                            <input
                                type="checkbox"
                                id="ElementName"
                                name="parameters"
                                defaultChecked={defaultValueSwitch(parameters)}
                                onChange={(e) => (
                                    onInputChange(e)
                                )}
                            >
                            </input>
                            <span className="checkmark"></span>
                            EN
                        </label>
                        {/* French */}
                        <label key="FR" className={"container lang langFR"} htmlFor="FR">
                            <input
                                type="checkbox"
                                id="FR"
                                name="parameters"
                                defaultChecked={defaultValueSwitch("FR")}
                                onChange={(e) => (
                                    onInputChange(e)
                                )}
                            >
                            </input>
                            <span className="checkmark"></span>
                            FR
                        </label>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Table;