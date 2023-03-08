import React, { useState, useEffect} from 'react';
import { Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Rating from '../../components/Rating/Rating.jsx'
import ModifyProduct from '../../components/ModifyProduct/ModifyProduct.jsx'
import style from './Detail.module.scss';
const url = 'https://cave88-api.onrender.com';

//La page Detail
const Detail = () => {
  const { id } = useParams();
  const [alcool, setAlcools] = useState([]);
  const [visible,setVisible] = useState(false);
  const token = sessionStorage.getItem("token");

  //Rendre le formulaire modification visible ou invisible
  const ToggleClass = () => {
    setVisible(visible?false:true); 
   };

  //Récupérer un produit selon Id  
  const getData = () => {
    axios.get(`${url}/api/product/${id}`)
    .then((res) => setAlcools(res.data))
    .catch(err => alert(err.message));
  };

  //Demander la suppression d'un produit à backend
  const handleDelete = async () => {
    if (window.confirm('Voulez vous le supprimer?/确认删除吗?')) {
      try {
        const res = await axios.delete(`${url}/api/product/${id}`, {
          headers: {
            'Authorization': token
          },
          data: alcool
        })
        if (res.status === 200) {
          window.alert('Objet supprimé!/已删除!');
          <Navigate to='/home'/>;
        }
        else {
          window.alert('Demande non autorisée/无权限!')
        }
      } catch (err) {
        window.alert(err.message)
      }
    }
  }

  //Appeler la fonction getData après monter de la page
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  },[]);

  //Monter le progress bar en attendant la donnée renvoyé par le backend
  if (alcool.length <= 0 || !alcool) {
    return <progress></progress>;
  }
  
  // on recupère dans une variable la data uniquement de id url = id json 
  const alcoolById = alcool;
  // It's checking if the locationById variable is empty. If it is, it's redirecting to the 404 page. 
  if (!alcoolById) {
    return <Navigate to='/404' />;
  }

  return (
    <main className={style.limitedWidthBlockContainer}>
      {alcoolById && (
        <div className={style.limitedWidthBlock}>
          <section className={style.item}>
            <article>
              <div className={style.item__img}>
                <img src={alcoolById.imageUrl} alt='bouteille de vin' />
              </div>
              <div className={style.item__content}>
                <div className={style.item__content__titlePrice}>
                  <h1 id={style.title}>{alcoolById.title}</h1>
                  <h2> Région : {alcoolById.region}</h2>
                  <h3> AOC : {alcoolById.AOC}</h3>
                  <Rating ratings={alcoolById.rating}/>
                  <div>
                    <p>
                        <span className={alcoolById.prix_offre?style.prixAnnuler:style.price}>Prix :{alcoolById.prix}€</span>
                    </p>
                    {alcoolById.prix_offre?<p className={style.pricePromo}>
                      <span>Promo : {alcoolById.prix_offre}€</span>
                    </p>:""}
                    
                  </div>
                </div>
                <div className={style.item__content__description}>
                  <p className={style.item__content__description__title}>
                    Description :
                  </p>
                  <p>{alcoolById.description}</p>
                </div>
              </div>
            </article>
          </section>
        {token?
          <div className={style.modifyBox}>
            <div className={style.deleteContainer}>
              <div className={style.buttonGroup}>
                <button type='button' onClick={ToggleClass}>Modify/修改</button>
                <button type='button' onClick={handleDelete}>Supprimer/删除</button>
              </div>
              <ModifyProduct visible={visible} product={alcoolById} />
            </div>
          </div>:""
        }
        </div>
      )}
    </main>
  );
};

export default Detail;