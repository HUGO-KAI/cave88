import React from "react";
import { FaEuroSign } from "react-icons/fa";
import {FaThumbsUp} from "react-icons/fa";
import style from './Filtre.module.scss'

//Retourner des filtres pour classer les vins par prix(de +bas à +haut) ou par notes (de +haut à +bas)
function Filtre (props) {
   
    const priceSorted = () =>{
        // Récuperer la fonction dans props et passer l'argument à mudule parent
        props.resultsSortPrice(sortPrice (props.vins))
    };

    //classer les vins par prix(de +bas à +haut)
    function sortPrice (arr) {
        arr.sort(comparePrice("prix"));
        return arr;//log les resultats, à changer une fois base donnée est prête
    }
    //fonction comparer les prix
    function comparePrice (prix){
        return function(m,n){
            let a = m[prix];
            let b = n[prix];
            return a - b;
        }
    }

    const ratingSorted = () =>{
        // Récuperer la fonction dans props et passer l'argument à mudule parent
        props.resultsSortRating(sortRating (props.vins))
    };
    //classer les vins par notes (de +haut à +bas)
    function sortRating (arr) {
        arr.sort(compareRating("rating"));
        return arr;//log les resultats, à changer une fois base donnée est prête
    }
    //fonction comparer les notes
    function compareRating (rating) {
        return function(m,n){
            let a = m[rating];
            let b = n[rating];
            return b - a;
        }
    }

    return (
        <div className ={style.lineFiltre}>
            <span>Filtres/点击优选</span>
            <div className = {style.filtreContainer}>
            <ul className ={style.filtre} onClick={priceSorted}>
                <li><FaEuroSign size="14px" /></li>
                <li>Prix / 价格优先</li>
            </ul>
            <ul className = {style.filtre} onClick={ratingSorted}>
                <li><FaThumbsUp size="14px" /></li>
                <li>Les mieux notés / 店长推荐</li>
            </ul>
            </div>
        </div>
    )
}

export default Filtre;