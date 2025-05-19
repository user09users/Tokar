import React from 'react';
import './social.scss';

const SocialList = () => {
    return (
        <div className="social__list">
            <ul>
                <li className="social__list-item telegram">
                    <a href="#" className="telegram">
                        <img
                            src="/icons/social/telegram.svg" // Corrected path
                            alt="telegram"
                        />
                    </a>
                </li>
                <li className="social__list-item whatsapp">
                    <a href="#" className="whatsapp">
                        <img
                            src="/icons/social/whatsapp.svg" // Corrected path
                            alt="whatsapp"
                        />
                    </a>
                </li>
                <li className="social__list-item viber">
                    <a href="#" className="viber">
                        <img
                            src="/icons/social/viber.svg" // Corrected path
                            alt="viber"
                        />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SocialList;
