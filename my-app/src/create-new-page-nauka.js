import React,{useState} from 'react';
import SideMenuNauka from "./side-menu-nauka";

const CreateNewQuiz = () => {
    const [newQuiz,setNewQuiz]=useState({
        id: 0,
        quiz:{
            quizName:"",
            quizInfo:"",
            quizPhoto:"",
            questions:[{}],
        quizUserInfo:{
            userPhoto:"",
            userName:"",
            date:""
        }}
    });
    const [myNewQuizQuestion, setMyNewQuizQuestion]=useState([{
        quizQuestionId:0,
        quizQuestion:"",
        quizAnswersFalse1:"",
        quizAnswersFalse2:"",
        quizAnswersFalse3:"",
        quizAnswersRight:""
    }])
    const [addQuizName,setAddQuizName]=useState("");
    const [addQuizInfo,setAddQuizInfo]=useState("");
    const [addQuizPhoto,setAddQuizPhoto]=useState("");
    const [addQuizQuestion,setAddQuizQuestion]=useState("");
    const [addQuizAnswerFalse1,setAddQuizAnswerFalse1]=useState("");
    const [addQuizAnswerFalse2,setAddQuizAnswerFalse2]=useState("");
    const [addQuizAnswerFalse3,setAddQuizAnswerFalse3]=useState("");
    const [addQuizAnswerRight,setAddQuizAnswerRight]=useState("");
    const [addQuizUserPhoto,setAddQuizUserPhoto]=useState("");
    const [addQuizUserName,setAddQuizUserName]=useState("");
    const [addQuizDate,setAddQuizDate]=useState("");
    const smallFormSubmitHandler = (e)=>{
        e.preventDefault();
        let question = {
            quizQuestionId: myNewQuizQuestion+1,
            quizQuestion:addQuizQuestion,
            quizAnswersFalse1: addQuizAnswerFalse1,
            quizAnswersFalse2:addQuizAnswerFalse2,
            quizAnswersFalse3:addQuizAnswerFalse3,
            quizAnswersRight:addQuizAnswerRight
        }
            localStorage.setItem(`${question.quizQuestionId}pytanie`, JSON.stringify(question));
        setMyNewQuizQuestion(prev =>[...prev,question]);
        console.log(localStorage);
    }
    const submitHandler = (e) => {

        e.preventDefault();
        const question1 = JSON.parse(localStorage.getItem("pytanie1"));
        const question2 = JSON.parse(localStorage.getItem("pytanie2"));
        const question3 = JSON.parse(localStorage.getItem("pytanie3"));
        const question4 = JSON.parse(localStorage.getItem("pytanie4"));
        let obj = {
            id: newQuiz.length+1,
            quiz:{
                quizName:addQuizName,
                quizInfo:addQuizInfo,
                quizPhoto:addQuizPhoto,
                questions:[{question1},{question2},{question3},{question4}]
            },
            quizUserInfo:{
                userPhoto:addQuizUserPhoto,
                userName:addQuizUserName,
                date:addQuizDate
            }
        }
        localStorage.setItem(`${obj.quizQuestionId}quiz`, JSON.stringify(obj));
        console.log(localStorage)
        setNewQuiz(prev => [...prev, obj]);
    }

    return (
        <div>
            <div className="columns">
                <SideMenuNauka/>
                <div className="column add-new-quiz-window">
                    <div className="new-quiz-form">
                        <h1 className="new-quiz-form-header has-text-centered">Dodajesz nowy quiz!</h1>

                        <form className="is-flex is-flex-direction-column">
                            <input className="form-input"
                                   type="photo"
                                   value={addQuizPhoto}
                                   onChange={e=>setAddQuizPhoto(e.target.value)}
                                   required
                                   placeholder="Dodaj miniaturkę do swojego quizu"/>
                            <input className="form-input"
                                   type="text"
                                   value={addQuizName}
                                   onChange={e=>setAddQuizName(e.target.value)}
                                   required
                                   placeholder="Dodaj tytuł quizu"/>
                            <input className="form-input"
                                   type="photo"
                                   value={addQuizInfo}
                                   onChange={e=>setAddQuizInfo(e.target.value)}
                                   required
                                   placeholder="Dodaj opis quizu"/>
                        </form>
                        <div className="new-quiz-questions columns">
                            <div className="column new-quiz-questions-list">
                                <ol>{
                                   myNewQuizQuestion.map((el)=>{
                                        return(
                                        <ul className="new-quiz-question-question-list" key={el.quizQuestionId}>
                                            <li>Pytanie: {el.quizQuestion}</li>

                                            <li>Odpowiedź 1: {el.quizAnswersFalse1}</li>
                                            <li>Odpowiedź 2: {el.quizAnswersFalse2}</li>
                                            <li>Odpowiedź 3: {el.quizAnswersFalse3}</li>
                                            <li>Odpowiedź 4: {el.quizAnswersRight}</li>

                                        </ul>

                                        )})
                                }</ol>
                                <p>Lista jest na razie pusta</p>
                                <button>Dodaj pytanie</button>
                            </div>
                            <form className="column new-quiz-questions-add "
                                  onSubmit={(e)=>smallFormSubmitHandler(e)}>
                                <p className="new-quiz-questions-add-header">Pytania:</p>
                                <div className="is-flex is-flex-direction-column">
                                <input className="form-input"
                                       type="text"
                                       value={addQuizQuestion}
                                       onChange={e=>setAddQuizQuestion(e.target.value)}
                                       required
                                       placeholder="Pytanie"/>
                                <input className="form-input"
                                       type="text"
                                       value={addQuizAnswerFalse1}
                                       required
                                       onChange={e=>setAddQuizAnswerFalse1(e.target.value)}
                                       placeholder="Odpowiedź(niepoprawna)"/>
                                <input className="form-input"
                                       type="text"
                                       value={addQuizAnswerFalse2}
                                       onChange={e=>setAddQuizAnswerFalse2(e.target.value)}
                                       placeholder="Odpowiedź(niepoprawna)"/>
                                <input className="form-input"
                                       type="text"
                                       value={addQuizAnswerFalse3}
                                       onChange={e=>setAddQuizAnswerFalse3(e.target.value)}
                                       placeholder="Odpowiedź(niepoprawna)"/>
                                <input className="form-input"
                                       type="text"
                                       value={addQuizAnswerRight}
                                       required
                                       onChange={e=>setAddQuizAnswerRight(e.target.value)}
                                       placeholder="Odpowiedź(poprawna)"/>
                                </div>
                                <button
                                    type="submit">Zapisz pytanie</button>

                            </form>

                        </div>
                        <button onSubmit={submitHandler}>Opublikuj quiz</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CreateNewQuiz;