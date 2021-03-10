import React from 'react';
import obrazek from "./assets/obrazek.png";

const AboutPage = () => {
    return (
        <section className="about-page">
            <div className="about-page-more has-text-centered">
                <a href="#witajnaquiztime">Dowiedz się więcej <i className="fas fa-arrow-down"></i></a>

            </div>
            <div className="columns">
                <div className="column about-page-text">
                    <p id="witajnaquiztime" className="has-text-centered about-page-header">Witaj na QuizTime!</p>
                    <p className="has-text-centered about-page-paragraph">QuizTime to twoja baza quizów, testów i<br/>
                        fiszek. Rozwiązuj treści przygotowane<br/>przez innych, lub sam twórz treści którymi<br/>
                        podzielisz się z innymi!</p>
                </div>
                <div className="column">
                    <img src={obrazek} alt="people with phone"/>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;