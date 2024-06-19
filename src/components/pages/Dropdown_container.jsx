import React, { useState } from 'react';
import "./Dropdown_container.css";

const Dropdown_container = ({ data }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='main-drop-container'>
            {data.map((item, index) => (
                <div key={index} className={`drop-content ${openIndex === index ? 'open' : ''}`}>
                    <button className='drop-heading' onClick={() => handleClick(index)}>{item.heading}</button>
                    <div className={`drop-text ${openIndex === index ? 'open' : ''}`}>
                        <p>{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Dropdown_container;
