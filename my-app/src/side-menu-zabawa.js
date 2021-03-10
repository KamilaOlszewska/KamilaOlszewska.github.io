import React, {useState} from "react";
import CategoriesListZabawa from "./data/categories-list-zabawa";
import ReactDOM from "react-dom";

const SideMenuZabawa=()=>{
    const ListOfCategoriesZabawa=CategoriesListZabawa.map((el)=>{
        return(<li><a href="" className="main-view-categories-item">{el}</a></li>)
    })
    return(
        <div className="column is-one-fifth main-view-categories ">
            <p>Kategorie</p>
            <ul>
                {ListOfCategoriesZabawa}
            </ul>
        </div>

    )
}
export default SideMenuZabawa;