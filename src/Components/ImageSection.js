import React from 'react';
import about from '../img/about-2.jpg';

const ImageSection = () => {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>I am <span>JuHee</span></h4>
                <p className="about-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Praesentium animi saepe odio illum magnam qui fugiat nobis 
                    beatae itaque! Consequatur ea quas corrupti dolorum, 
                    omnis impedit sequi sit ut quod.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                    </div>
                    <div className="right-section">
                        <p>: Kim Juhee</p>
                        <p>: 26</p>
                        <p>: South of Korea</p>
                        <p>: Korean, English, Polish</p>
                        <p>: Seoul</p>
                    </div>
                </div>
                <button className="btn">download cv</button>
            </div>
        </div>
    );
};

export default ImageSection;