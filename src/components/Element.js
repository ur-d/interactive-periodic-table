import React, { useState, useEffect } from 'react';

const Element = ({ props, activeSettings }) => {
    const [render, setRender] = useState([]);

    useEffect(() => {
        var info = [];
        for (const [key, value] of Object.entries(activeSettings)) {
            // console.log(key + " " + value);
            if (value) {
                // console.log(props[key]);
                info.push(<div className={key} key={key}>{props[key]}</div>);
                // console.log(info);
            }
        }
        // console.log(info);
        setRender(info);

    });
    // }, [activeSettings]);
        
    return (
        <div className={"element " + props.Type.replace(/ /g, "")} style={{gridArea:props.Symbol}}>
            {/* <span>{props.AtomicMass}</span> */}
            {render.map((info) => (<>{info}</>))}
        </div>
    );
};

export default Element;