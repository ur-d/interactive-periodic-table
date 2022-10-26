import React from 'react';
import Element from './Element';

const TablePart = ({ props, colors, language, otherInfo, dictionary }) => {


    return (
        <div className="TablePart">
            <div className="ElementsPart">

                <div className="Element Exemple" style={{gridArea: "Ex"}}>
                    <div className="ExempleInfo">
                        <div className="AtomicNumber">0</div>
                        <div className="Symbol">Ex</div>
                        <div className="ElementName">Exemple</div>
                        <div className="AtomicMass">{dictionary[language].AtomicMass}</div>
                        <div className="OtherInfo">{dictionary[language][otherInfo]}</div>
                    </div>
                </div>

                {props.map((element) => (
                    <Element key={element.AtomicNumber} props={element} colors={colors} language={language} otherInfo={otherInfo} dictionary={dictionary}></Element>
                ))}

                {/* Margin over lanthanides and actinides */}
                <div className="Ma" style={{gridArea: "Ma"}}></div>

                <div className="Path" style={{gridArea: "P1"}}>57-71</div>
                <div className="Path" style={{gridArea: "P2"}}>89-103</div>

            </div>
        </div>
    );
};

export default TablePart;