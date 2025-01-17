import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CloseIcon } from '../assets/icons/close-icon.svg'
import teddy from '../assets/Images/thankyou-teddy.svg'

const OnLoadPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show the popup when the component loads
        setIsOpen(true);
    }, []);

    const closePopup = () => {
        setIsOpen(false);
    };

    return (
        <>
            {isOpen && (
                <div className="welcomePopup">
                    <div className="popupBox text-center">
                        <Link onClick={closePopup}><CloseIcon className="popup-close" /></Link>
                        {/* <h2>Welcome To Avna</h2> */}
                        <h3 className="popup-title"><span>Thank you</span>  <br></br>For Visiting Again in our website.!</h3>
                        <img src={teddy} alt="teddy" className="teddy-img" />
                    </div>
                </div>
            )}
        </>
    );
};

export default OnLoadPopup;
