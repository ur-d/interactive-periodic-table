import React, { useState, useEffect, useContext } from 'react';

const Element = ({ props, colors, language, otherInfo, dictionary }) => {


    const [otherInfoRender, setOtherInfoRender] = useState(undefined)
    const [languageRender, setLanguageRender] = useState(dictionary[language][props.AtomicNumber])
    const [backgroundColor, setBackgroundColor] = useState("")
    const [color, setColor] = useState("")

    
    useEffect(() => {
        setOtherInfoRender(props[otherInfo])
    }, [otherInfo]);

    useEffect(() => {
        setLanguageRender(dictionary[language][props.Symbol])
    }, [language])

    useEffect(() => {
        if (colors == "Type") {
            setBackgroundColor("")
        }

        if (colors == "AtomicRadius") {
            if (props.AtomicRadius !== "") {
                var product = parseFloat(props.AtomicRadius) * 280;
                var product = product / 3.5;
                var product2 = product - 255;
                var product2 = product2 * -1;
                // show color for the spectrum
                setBackgroundColor(`rgb(${product/1.3},${product2},${product})`)
            }
            else {
                // show white
                setBackgroundColor("white")
            }
        }

        if (colors == "Electronegativity") {
            if (props.Electronegativity !== "") {
                var product = parseFloat(props.Electronegativity) * 240;
                var product = product / 3;
                var product2 = product - 255;
                var product2 = product2 * -1;
                // show color for the spectrum
                setBackgroundColor(`rgb(${product},${product2},${product2})`)
            }
            else {
                // show white
                setBackgroundColor("white")
            }
        }
    }, [colors])

    const isRadioactive = () => {
        if (props.Radioactive === "yes") {
            return (
                <img className="Radioactive-img" src="./img/radioactive.svg" alt="radioactive" />
            )
        }
        else {return}
    }

    // console.log(dictionary)
    
    return (
        <div key={props.Symbol} className={"Element " + props.Type.replace(/ /g, "")} style={{
            gridArea: props.Symbol,
            backgroundColor: backgroundColor,
            color: color
        }}>
            <div className="Info">
                <div className='AtomicNumber'>{props.AtomicNumber}</div>
                <div className='Symbol'>{props.Symbol}</div>
                <div className='AtomicMass'>{props.AtomicMass}</div>
                <div className='ElementName'>{languageRender}</div>
                <div className="OtherInfo">{otherInfoRender}</div>
                <div className='Radioactive'>
                    {isRadioactive()}
                </div>
            </div>
        </div>
    );
};

export default Element;