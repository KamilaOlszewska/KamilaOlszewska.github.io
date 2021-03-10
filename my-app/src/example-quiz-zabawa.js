import React from 'react';
import NewQuizZabawa from "./data/new-quiz-zabawa";
import "./css/index.css"

const ExampleQuizZabawa = () => {
    const NewQuizItems= NewQuizZabawa.map((el)=>{
        return(
            <div className="example-quiz-card-whole-card is-flex">
                <img src="assets/img.png" className="example-quiz-card-photo"/>
                <div className="example-quiz-card-description ">
                    <h2 className="example-quiz-header">{el.quizName}</h2>
                    <p className="example-quiz-paragraph">{el.quizInfo}</p>
                    <div className="example-quiz-card-user-info level">
                        <img className="example-quiz-card-user-info-photo" src={el.quizUserInfo.userPhoto}/>
                        <h4>{el.quizUserInfo.userName}</h4>
                        <p>{el.quizUserInfo.date}</p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="example-quiz-box">
            {NewQuizItems}
        </div>
    );
};

export default ExampleQuizZabawa;