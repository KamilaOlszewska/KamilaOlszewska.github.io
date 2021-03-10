import React from 'react';
import SideMenuZabawa from "./side-menu-zabawa";
import ExampleQuizZabawa from "./example-quiz-zabawa";
import Footer from "./footer";
import AddNewQuiz from "./add-new-quiz";



const Zabawa = () => {
    return (
        <div>

            <section className="main-view">
                <div id="next-page"></div>
                <div className="columns">
                    <SideMenuZabawa/>
                    <div className="column main-view-box is-flex is-flex-direction-column">
                        <AddNewQuiz/>
                        <div className="example-quiz-section-box is-flex-wrap-wrap">
                            <ExampleQuizZabawa/>
                        </div>
                    </div>
                </div>


            </section>
            <Footer/>
        </div>

    );
};

export default Zabawa;