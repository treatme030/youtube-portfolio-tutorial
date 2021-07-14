import React from 'react';
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

const AboutPage = () => {
    return (
        <div className="AboutPage">
            <Title title={'About me'} span={'About me'}/>
            <ImageSection/>
            <Title title={'My Skills'} span={'My Skills'}/>
            <div className="skillContainer">
                <SkillsSection skill={'JavaScript'} progress={'80%'} width={'80%'}/>
                <SkillsSection skill={'HTML'} progress={'90%'} width={'90%'}/>
                <SkillsSection skill={'TypeScript'} progress={'30%'} width={'30%'}/>
                <SkillsSection skill={'CSS'} progress={'80%'} width={'80%'}/>
                <SkillsSection skill={'React'} progress={'70%'} width={'70%'}/>
                <SkillsSection skill={'Java'} progress={'30%'} width={'30%'}/>
                <SkillsSection skill={'Node.js'} progress={'60%'} width={'60%'}/>
                <SkillsSection skill={'Web Design'} progress={'50%'} width={'50%'}/>
            </div>
            <Title title={'Services'} span={'Services'}/>
            <div className="services-container">
                <ServicesSection design={design} title={'Web design'} 
                text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'}/>
                <ServicesSection design={intelligence} title={'Artificial Intelligence'}
                text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'}/>
                <ServicesSection design={gamedev} title={'Game Development'}
                text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'}/>
            </div>
        </div>
    );
};

export default AboutPage;