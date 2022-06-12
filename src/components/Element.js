import React, { useState, useEffect } from 'react';

// an element

const Element = ({ props, activeSettings }) => {
    // info to render
    const [render, setRender] = useState([]);
    // element type (atomic, non-metal, etc.) to put the right class
    const [type, setType] = useState([]);
    // css style to put (place in the right place and display the right background color)
    const [style, setStyle] = useState([]);

    useEffect(() => {
        // Set render
        var info = [];

        for (const [key, value] of Object.entries(activeSettings)) {
            // for each active setting (value = true)
            if (value) {
                // check if the element is radioactive (props[key] = "yes")
                if (key == "Radioactive" && props[key] == "yes") {
                    // image : https://www.svgrepo.com/svg/407277/radioactive
                    // add radioactive image
                    info.push(<div className="Radioactive"><img className="Radioactive-img" key={key} src="https://www.svgrepo.com/show/407277/radioactive.svg" alt="radioactive" /></div>);
                }
                // if (key = type) do nothing
                else if (key !== "Type") {
                    // add important info
                    if (key == "AtomicNumber" || key == "Symbol" || key == "AtomicMass") {
                        info.push(<div className={key} key={key}>{props[key]}</div>)
                    }
                    // add "language" info (element name)
                    else if (key == "ElementName" || key == "FR") {
                        info.push(<div className="Language ElementName" key={key}>{props[key]}</div>)
                    }
                    // check if isn't a "spectrum" info
                    else if (key.endsWith("Spectrum")) {
                    }
                    // add "other" info
                    else {
                        info.push(<div className={key + " Other"} key={key}>{props[key]}</div>)
                    }
                }
            }
        }
        // send info to render
        setRender(info);

        // Set type
        if (activeSettings.Type) {
            setType(" " + props.Type.replace(/ /g, ""))
        }
        else {
            setType("")
        }


        // Spectrum color
        // for atomic radius spectrum
        if (activeSettings.atomicRadiusSpectrum) {
            // if atomic radius isn't specified show white
            if (props.AtomicRadius !== "") {
                var product = parseFloat(props.AtomicRadius) * 280;
                var product = product / 3.5;
                var product2 = product - 255;
                var product2 = product2 * -1;
                // show color for the spectrum
                setStyle({
                    gridArea: props.Symbol,
                    backgroundColor: `rgb(${product/1.3},${product2},${product})`
                })
            }
            else {
                // show white
                setStyle({
                    gridArea: props.Symbol,
                    backgroundColor: "rgb(255,255,255)"
                })
            }
        }
        // for electronegativity spectrum
        else if (activeSettings.electroNegativitySpectrum) {
            // if electronegativity isn't specified show white
            if (props.Electronegativity !== "") {
                var product = parseFloat(props.Electronegativity) * 240;
                var product = product / 3;
                var product2 = product - 255;
                var product2 = product2 * -1;
                // show color for the spectrum
                setStyle({
                    gridArea: props.Symbol,
                    backgroundColor: `rgb(${product2},${product},${product})`
                })
            }
            else {
                // show white
                setStyle({
                    gridArea: props.Symbol,
                    backgroundColor: "rgb(255,255,255)"
                })
            }
        }
        // if no spectrum is selected show nothing special
        else {
            setStyle({
                gridArea: props.Symbol
            })
        }


    });

    return (
        // Render the element's infos
        <div key={props.Symbol} className={"element" + "" + type} style={style}>
        {/* empty "other" div use for css placement */}
        <div className="Other" id="other"></div>
        {/* empty "language" div use for css placement */}
        <div className="ElementName"></div>
        {/* render each info */}
        {render.map((info) => (<React.Fragment key={info.key}>{info}</React.Fragment>))}
        </div>
    );
};

export default Element;