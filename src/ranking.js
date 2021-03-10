import React from 'react';
import winners from "./data/winners";
import Footer from "./footer";

const Ranking = () => {
    const NewWinner = winners.map((el)=>{
        return(
            <tr>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.points}</td>
            </tr>
        )
    })
    return (<>
        <div className="ranking-page">
            <div className="container">
            <div className="ranking is-flex is-flex-direction-column ">
                <div className="ranking-header has-text-centered">
                <h1 className="ranking-header-header">Ranking użytkowników</h1>
                <p className="ranking-header-paragraph">Zobacz użytkowników którzy uzyskali najwięcej punktów!</p>
                </div>
                <table className="table container ranking-table">
                    <tr>
                        <th>Miejsce</th>
                        <th>Nazwa użytkownika</th>
                        <th>Ilość zdobytych punktów</th>
                    </tr>
                    {NewWinner}
                </table>
                <span className="has-text-centered ranking-congratulations"><p className="ranking-header-header">Gratulacje!</p><i className="fas fa-crown fa-2x"></i></span>
            </div>
        </div>
        </div>
        <Footer/>
        </>
    );
};

export default Ranking;