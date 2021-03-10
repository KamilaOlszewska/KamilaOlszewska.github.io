import React from 'react';
import {BrowserRouter,Link} from "react-router-dom"


const AddNewQuiz = () => {

    return (
        <div>
                <div className="level">
                    <div
                        className="level-left is-flex is-flex-direction-column main-view-box-header
                        has-text-centered is-three-quarters">
                        <p>Przeglądaj treści dodane przez innych lub stwórz
                            samodzielnie nowy quiz.</p>
                        <button  className="form-button mt-2">Rozumiem</button>
                    </div>
                    <div
                        className="main-view-box-add-btn level-right is-flex
                        is-flex-direction-column has-text-centered">
                            <Link to="/nauka/create-new-quiz">
                        <i className="fas fa-plus fa-4x"></i>
                        <p className="main-view-btn-title">Dodaj nowy quiz</p></Link>
                    </div>
                </div>

        </div>
    );
};


export default AddNewQuiz;