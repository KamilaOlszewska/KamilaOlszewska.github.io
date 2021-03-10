import React from 'react';

const Features = () => {
    return (
        <section className="features">
            <div className="container">
                <p className="has-text-centered features-header">Poznaj funkcje</p>
                <div className="columns">
                    <div className="column has-text-centered is is-flex is-flex-direction-column">
                        <p className="features-paragraph">Twórz i rozwiązuj edukacyjne<br/>
                            quizy. Ucz się nowych słówek<br/>
                            w języku hiszpańskim,<br/>
                            sprawdź wiedzę swoich<br/>
                            uczniów z ostatniego rozdziału<br/>
                            lub utrwal wzory pierwiastków<br/>
                            chemicznych.</p>
                        <div className="features-photo-circle features-photo-circle1"></div>
                    </div>
                    <div className="column has-text-centered is-flex is-flex-direction-column">
                        <p className="features-paragraph fp2">Dziel się wynikami ze znajomymi.<br/>
                            Sprawdź jaką pizzą jest<br/>
                            twój sąsiad, albo jakim<br/>
                            kolorem jest twoja<br/>
                            koleżanka z ławki.</p>
                        <div className="features-photo-circle features-photo-circle2"></div>
                    </div>
                    <div className="column has-text-centered is-flex is-flex-direction-column">
                        <p className="features-paragraph fp3">Sprawdź swoją wiedzę<br/>
                            w quizach o ulubionym<br/>
                            serialu. Porównaj wyniki<br/>
                            z innymi graczami i zostań<br/>
                            Królem Rankingu!</p>
                        <div className="features-photo-circle features-photo-circle3"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;