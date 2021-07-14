import React from 'react';
import { faFacebook, faGithub, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Juhee</span>
                </h1>
                <p className="h-sub-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Maiores, eos veritatis? Dolore architecto placeat quidem 
                    corrupti temporibus aliquid perspiciatis mollitia, 
                    sed accusantium eveniet culpa repellat blanditiis 
                    consequuntur atque obcaecati animi.
                </p>
                <div className="icons">
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon facebook"/>
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon github"/>
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faYoutube} className="icon youtube"/>
                    </Link>
                </div>
            </header>
        </div>
    );
};

export default HomePage;