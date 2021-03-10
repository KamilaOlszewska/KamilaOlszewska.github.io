import React, {useState} from "react";
import ReactDOM from "react-dom";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// let firebaseConfig = {
//     apiKey: "AIzaSyAGaPNd297XZ3YRHaLkInI4I0bxm9f6pTM",
//     authDomain: "quiztime-fb88d.firebaseapp.com",
//     databaseURL: "https://quiztime-fb88d-default-rtdb.europe-west1.firebasedatabase.app",
//     projectId: "quiztime-fb88d",
//     storageBucket: "quiztime-fb88d.appspot.com",
//     messagingSenderId: "614974100443",
//     appId: "1:614974100443:web:1e467ccd006c95febd4dfe",
//     measurementId: "G-GL01KX5FJX"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// let messageRef = firebase.database().ref('messages')


const Form =()=>{

        const[values,setValues]=useState({
            name: "", email: ""
        });
        const set = name =>{
            return({target: {value}})=>{
                setValues(oldValues =>({...oldValues, [name]: value}))
            }
        };
        const saveFormData = async () =>{
            const response = await fetch("https://quiztime-fb88d-default-rtdb.europe-west1.firebasedatabase.app/",{
                method: 'Post',
                body: JSON.stringify(values)
            });
            if(response.status !==200){
                throw new Error (`Request failed:${response.status}`);
            }
            const onSubmit = async (event)=>{
                event.preventDefault();
                try{
                    await saveFormData();
                    alert ("Dziękujemy za to że dołączyłeś do naszego newslettera!");
                    setValues({
                        name:"", email:""
                    });
                    }catch (e){
                    alert(`Coś poszło nie tak! ${e.message}`)
                }
                }
                }
        return(

                <section className="form">
                    <div className="container">
                        <div className="columns">
                            <form id="form" className="column form-form is-flex is-flex-direction-column">
            <p className="form-header has-text-centered">Zapisz się do newslettera żeby być na<br/>
                bieżąco z aktualizacjami!</p>
        <div className="level">
            <div className="columns level-item">
                <div onSubmit={null} className="form-inputs is-flex is-flex-direction-column column is-pulled-left">
                    <label className="form-label" htmlFor="name">Imię</label>
                    <input
                        className="form-input"
                        id="name"
                        type="text"
                        value={values.name}
                        placeholder="Tu wpisz swoje imię"
                        onChange={set('name')}
                        required/>
                        <label className="form-label" htmlFor="email">E-mail</label>
                        <input
                            className="form-input"
                            id="email" type="email"
                            value={values.email}
                            placeholder="Tu wpisz swój e-mail"
                            onChange={set('email')}
                            required
                        />
                </div>
            </div>
            <button type="submit" className=" level-item form-button is-pulled-right form-button-send">Zapisz mnie
            </button>
        </div>
                            </form>
                            <div className="column has-text-centered">
                                <p className="form-text primary-font-style">To już czas.<br/>
                                    To <b className="form-text logo-font-style">QuizTime</b> !</p>
                                <a href="/" className="form-button form-button-start">Start</a>
                            </div>
                        </div>
                    </div>
                </section>



    );
    }

    export default Form;
