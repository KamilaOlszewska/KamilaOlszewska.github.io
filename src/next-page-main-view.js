import React from 'react';
import SideMenuNauka from "./side-menu-nauka";
import ExampleQuizNauka from "./example-quiz-nauka";
import Footer from "./footer";
import AddNewQuiz from "./add-new-quiz";

const NextPageMainView = () => {
    return (
        <div>

            <section className="main-view">
                <div id="next-page"></div>
                <div className="columns">
                    <SideMenuNauka/>
                    <div className="column main-view-box is-flex is-flex-direction-column">
                        <AddNewQuiz/>
                        <div className="example-quiz-section-box is-flex-wrap-wrap">
                        <ExampleQuizNauka/>
                        </div>
                    </div>
                </div>


            </section>
            <Footer/>
        </div>

    );
};

export default NextPageMainView;