import React from 'react';

const Footer = ({language, dictionary}) => {


    return (
        <div className="Footer">
            <ul className="">
                <li className="version">
                    interactive periodic table v0.3
                </li>
                <li className="msg">
                    {dictionary[language].MWL}
                </li>
                <li className="github">
                    {/* image source : https://github.com/logos */}
                    <a target="_blank" rel="noreferrer" href="https://github.com/ur-d/interactive-periodic-table">
                        <img src="./img/GitHub-Mark-32px.png" alt="Github Logo" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Footer;