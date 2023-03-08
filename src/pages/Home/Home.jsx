import Filtre from "../../components/Filtre/Filtre.jsx"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/Card/Card.jsx';
import '../../globalData';
const url = global.api.url;

//La page Home
const Home = () => {

  //Initialiser un array dans le state
  const [alcools, setAlcools] = useState([]);

  //Demander les produits à backend
  const getData = () => {
    axios.get(`${url}/api/product`).then((res) => setAlcools(res.data));
  };

  //Passer les donnée une fois la page est montée
  useEffect(() => {
    getData();
  }, []);

  //Changer les donnée dans le state après classment par le prix
  const priceSorted = (results) => {
    setAlcools([...results])
  };

  //Changer les donnée dans le state après classment par le rating
  const ratingSorted = (results) => {
    setAlcools([...results])
  };

  return (
    <div>
    <Filtre vins = {alcools} resultsSortPrice={priceSorted} resultsSortRating={ratingSorted}/>
    <Card alcools = {[...alcools]}/>    
    </div>
  );
};

export default Home;