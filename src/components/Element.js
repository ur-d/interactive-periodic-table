import React, { useState, useEffect} from 'react';

const Element = ({ props, colors, language, otherInfo, dictionary }) => {

    const [otherInfoRender, setOtherInfoRender] = useState(undefined)
    const [languageRender, setLanguageRender] = useState(dictionary[language][props.AtomicNumber])
    const [backgroundColor, setBackgroundColor] = useState("")
    const [color, setColor] = useState("")

    
    useEffect(() => {
        setOtherInfoRender(props[otherInfo])
    }, [otherInfo, props]);

    useEffect(() => {
        setLanguageRender(dictionary[language][props.Symbol])
    }, [language, dictionary, props.Symbol])

    useEffect(() => {
        if (colors === "Type") {
            setBackgroundColor("")
        }

        if (colors === "AtomicRadius") {
            if (props.AtomicRadius !== "") {
                var product = parseFloat(props.AtomicRadius) * 280;
                product = product / 3.5;
                var product2 = product - 255;
                product2 = product2 * -1;
                // show color for the spectrum
                setBackgroundColor(`rgb(${product/1.3},${product2},${product})`)
            }
            else {
                // show white
                setBackgroundColor("white")
            }
        }

        if (colors === "Electronegativity") {
            if (props.Electronegativity !== "") {
                product = parseFloat(props.Electronegativity) * 240;
                product = product / 3;
                product2 = product - 255;
                product2 = product2 * -1;
                // show color for the spectrum
                setBackgroundColor(`rgb(${product},${product2},${product2})`)
            }
            else {
                // show white
                setBackgroundColor("white")
            }
        }
    }, [colors, props.Electronegativity, props.AtomicRadius])

    const isRadioactive = () => {
        if (props.Radioactive === "yes") {
            return (
                // image source : https://www.svgrepo.com/show/407277/radioactive.svg
                <img className="Radioactive-img" src="./img/radioactive.svg" alt="radioactive" />
            )
        }
        else {return}
    }
    

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