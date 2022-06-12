import React from 'react';
import Element from './Element';

// elements part

const Elements = ({ props, activeSettings }) => {

    return (
        <div className="elements-part">
            <div className="elements" 
            >
                {/* Call each element and send it data */}
                {props.map((element) => (
                <Element key={element.AtomicNumber} props={element} activeSettings={activeSettings}/>
                ))}
            </div>
        </div>
    );
};

export default Elements;