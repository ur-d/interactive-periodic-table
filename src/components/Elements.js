import React from 'react';
import Element from './Element';

const Elements = ({ props, activeSettings }) => {

    return (
        <div className="elements">
            {props
            .map((element) => (
            <Element key={element.AtomicNumber} props={element} activeSettings={activeSettings}/>
            ))}
        </div>
    );
};

export default Elements;