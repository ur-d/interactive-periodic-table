import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Element from './Element';

// Contain all the elements and information next to it (Exemple element, columns number, from an element to another)
const TablePart = ({ props, colors, otherInfo, dictionary }) => {

    // Stock the maximum value to calculate the gradient color
    const [maximum, setMaximum] = useState(0)

    // Update the maximum value when an info is selected
    useEffect(() => {
        var max = 0
        for (let i = 0; i < props.length; i++) {
            if (props[i][otherInfo] > max) {
                max = props[i][otherInfo]
            }
        }
        setMaximum(max)
    }, [props, colors, otherInfo])


    // Render columns from 1 to 18
    const columns = () => {
        var list = [];
        for (let i = 1; i < 19; i++) {
            list.push(<div key={i} style={{gridArea: "C"+ i}} className={"Column"}>{i}</div>)
        }
        return (list)
    }

    return (
        <div className="TablePart">
            <div className="ElementsPart">

                {/* Exemple element */}
                <div className="Element Exemple" style={{gridArea: "Ex"}}>
                    <div className="ExempleInfo">
                        <div className="AtomicNumber">0</div>
                        <div className="Symbol">Ex</div>
                        <div className="ElementName">Exemple</div>
                        <div className="AtomicMass">{dictionary.AtomicMass}</div>
                        <div className="OtherInfo">{dictionary[otherInfo]}</div>
                    </div>
                </div>

                {/* Columns number */}
                {columns()}

                {/* Elements */}
                {props.map((element) => (
                    // Call an element
                    <Element key={element.AtomicNumber} props={element} colors={colors} otherInfo={otherInfo} dictionary={dictionary} maximum={maximum}></Element>
                ))}

                {/* Space between lanthanides + actinides and the upper side of the table */}
                <div className="Ma" style={{gridArea: "Ma"}}></div>

                {/* 58 to 71 and 90 to 103 paths */}
                <div className="Path" style={{gridArea: "P1"}}>
                    <div>58</div><div>-</div><div>71</div>
                </div>
                <div className="Path" style={{gridArea: "P2"}}>
                    <div>90</div><div>-</div><div>103</div>
                </div>

            </div>
        </div>
    );
};

export default TablePart;