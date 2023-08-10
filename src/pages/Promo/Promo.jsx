import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filtre from '../../components/Filtre/Filtre.jsx';
import Card from '../../components/Card/Card.jsx'
import style from './Promo.module.scss';
import '../../globalData';
const url = global.api.url;


//Page Promo
const Promo = () => {

  //initialiser le state pour les produits
  const [alcools, setAlcools] = useState([]);

  //Demander les produits en promo au backend
  const getData = () => {
    axios.get(`${url}/api/product`)
    .then((res) => {
        const result = res.data.filter(word => word.prix_offre);
        return result;
    })
    .then ((result) => setAlcools(result));
  };

  //Passer les donnée une fois que la page est montée
  useEffect(() => {
    getData();
  }, []);

  //Classer les produits par le prix ou la note
  const priceSorted = (results) => {
    setAlcools([...results])
  };
  const ratingSorted = (results) => {
    setAlcools([...results])
  };

  return (
    <div>
      <div className={style.titles}>
        <h1>Nos vins en promo</h1>
      </div>
      <Filtre vins = {alcools} resultsSortPrice={priceSorted} resultsSortRating={ratingSorted}/>
      <Card alcools = {[...alcools]}/>    
    </div>
  );
};

export default Promo;