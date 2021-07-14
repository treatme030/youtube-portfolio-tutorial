import React from 'react';

const ServicesSection = ({design, title, text}) => {
    return (
        <div className="ServicesSection">
            <div className="service">
                <div className="service-content">
                    <img src={design} alt="" />
                    <h5 className="s-title">{title}</h5>
                    <p className="s-text">
                         {text}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;