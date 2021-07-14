import React from 'react';
import Title from '../Components/Title';
import ImageSection from './ImageSection';

const AboutPage = () => {
    return (
        <div className="AboutPage">
             <Title title={'About me'} span={'About me'}/>
             <ImageSection/>
        </div>
    );
};

export default AboutPage;