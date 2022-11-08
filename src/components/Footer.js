import React from 'react';

// At the bottom, is used to link to the GitHub and to place credits
const Footer = ({dictionary}) => {


    return (
        <div className="Footer">
            <ul className="">
                {/* Version name */}
                <li className="version">
                    interactive periodic table v0.3
                </li>
                {/* Credit message */}
                <li className="msg">
                    {/* MWL stands for "made with love" */}
                    {dictionary.MWL}
                </li>
                {/* Link to the GitHub */}
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