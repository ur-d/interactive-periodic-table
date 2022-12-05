import React, { useState, useEffect} from 'react';

// Render information given by TablePart
const Element = ({ props, colors, otherInfo, dictionary, maximum, minimum }) => {

    // Updatable informations
    const [otherInfoRender, setOtherInfoRender] = useState(undefined)
    const [languageRender, setLanguageRender] = useState(dictionary[props.AtomicNumber])

    // Style informations, change when gradient is on
    const [backgroundColor, setBackgroundColor] = useState("")
    const [color, setColor] = useState("")

    
    // Update information 
    useEffect(() => {
        setOtherInfoRender(props[otherInfo])
    }, [otherInfo, props]);

    // Update language
    useEffect(() => {
        setLanguageRender(dictionary[props.Symbol])
    }, [dictionary, props])

    // Update gradient
    useEffect(() => {
        if (colors === false) {
                setBackgroundColor("")
                setColor("")
        }

        if (colors === true) {
            setColor("")
            if (props[otherInfo] === "") {
                setBackgroundColor("white")
            }
            else {
                var product = (parseFloat(props[otherInfo]) - minimum) / (maximum - minimum)
                product = product * 255;
                var product2 = product - 255;
                product2 = product2 * -1;
                setBackgroundColor(`rgb(${product},${product2},${product})`)
                if (parseFloat(props[otherInfo]) > maximum*0.4) {
                    setColor("white")
                }
            }
            
        }
        // DO NOT PUT "otherInfo" in the array dependencies below, it will cause flashing colors
    }, [colors, props, maximum, minimum])

    // Render radioactive if it is
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