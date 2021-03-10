import React from 'react';

const HeroSection = () => {
    return (
        <section className="hero is-halfheight hero-section">
            <div className="hero-confetti-bg">
                <div className="hero-body">
                    <div className="container">

                        <p className="title has-text-centered hero-title">
                            Sprawdź się!
                        </p>
                        <p className="subtitle has-text-centered hero-paragraph">
                            Baw się rozwiązując quizy ze znajomymi.<br/>
                            Ucz się tworząc fiszki.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;