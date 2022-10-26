import React from 'react';

const Footer = ({language, dictionary}) => {


    return (
        <div className="Footer">
            <ul className="">
                <il className="version">
                    interactive periodic table v0.3
                </il>
                <il className="msg">
                    {dictionary[language].MWL}
                </il>
                <il className="github">
                    {/* image source : https://github.com/logos */}
                    <a target="_blank" rel="noreferrer" href="https://github.com/ur-d/interactive-periodic-table">
                        <img src="./img/GitHub-Mark-32px.png" alt="Github Logo" />
                    </a>
                </il>
            </ul>
        </div>
    );
};

export default Footer;