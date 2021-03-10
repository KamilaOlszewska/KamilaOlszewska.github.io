import React from 'react';

const Footer = () => {
    return (
        <section className="footer">
            <div className="level">
                <p className="footer-copyright level-left">© 2021 <b className="footer-small-logo">QuizTime</b></p>
                <div className="footer-social-media level-right">
                    <i className="footer-social-media-icon fab fa-facebook-square"></i>
                    <i className="footer-social-media-icon fab fa-instagram-square"></i>
                    <i className="footer-social-media-icon fab fa-twitter-square"></i>
                </div>
            </div>

        </section>
    );
};

export default Footer;