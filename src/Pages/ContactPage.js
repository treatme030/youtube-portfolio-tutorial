import React from 'react';
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Title from '../Components/Title';

const ContactPage = () => {
    return (
        <div className="ContactPage">
            <Title title={'Contact'} span={'Contact'}/>
            <div className="contact-container">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10639.723114640507!2d126.98295223982993!3d37.550148679436276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca257a88e6aa9%3A0x5cf8577c2e7982a5!2sN%20Seoul%20Tower!5e0!3m2!1sen!2skr!4v1626319590353!5m2!1sen!2skr" width="600" height="450" style={{border:0}} allowfullscreen="" aria-hidden="false"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+82 345 4534'} text2={'+82 2344 3423'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'treatme8192@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'South of Korea'} text2={'Seoul'} title={'Location'}/>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;