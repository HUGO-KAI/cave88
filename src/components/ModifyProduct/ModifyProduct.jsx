import React, { useRef, useState } from 'react';
import RangeBar from '../RangeBar/RangeBar';
import style from './ModifyProduct.module.scss'
import axios from 'axios';
import '../../globalData';
const url = global.api.url;

//Component pour modifier un product
const ModifyProduct =(props) => {
    const productById = props.product;
    const id = productById._id;
    const visible = props.visible;
    const fromRef = useRef();

    //Initialiser le state
    const [state, setState] = useState({
        id:id,
        title: `${productById.title}`,
        description: `${productById.description}`,
        rating: `${productById.rating}`,
        prix: `${productById.prix}`,
        prix_offre: `${productById.prix_offre}`,
        region: `${productById.region}`,
        AOC: `${productById.AOC}`
    });
    const [image, setImage] = useState(null);
    
    //Gérer la saisie du formulaire
    const handleChange = (dataType) => {
        return (e) => setState({...state,[dataType]: e.target.value});
    }

    //Gérer la modification de l'image    
    const onChangeImage = (e) => {
        setImage(e.target.files[0]);
    }

    //Collecter la modificaiton et l'envoyer au backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        const product = state;
        try {
            const formData = new FormData();
            const token = sessionStorage.getItem("token"); 
            formData.append('image', image);
            formData.append('product', JSON.stringify(product));
            const res = await axios.put(`${url}/api/product/${id}`, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': token
              }
            });
            if (res.status === 200) {
                window.alert('Modification enregistré! 红酒修改成功!');
                window.location.reload(); 
            }
          } catch (err) {
            console.log(err);
          }
        }
            
    return (
        <>
        <form className={visible?style.form:style.unvisible} onSubmit={handleSubmit}>
            <div className={style.container}>
                <label htmlFor="title">酒名</label>
                <input type="text" name="title" id="title" onChange={handleChange("title")} placeholder={productById.title}/>
            </div>
            <div className={style.container}>
                <label htmlFor="region">大区</label>
                <input type="text" name="region" id="region" onChange={handleChange("region")} placeholder={productById.region}/>
            </div>
            <div className={style.container}>
                <label htmlFor="AOC">产区</label>
                <input type="text" name="AOC" id="AOC" onChange={handleChange("AOC")} placeholder={productById.AOC}/>
            </div>
            <div className={style.container}>
                <label htmlFor="description">口感</label>
                <textarea name="description" id="description" className={style.description} rows="5" onChange={handleChange("description")} placeholder={productById.description} ></textarea>
            </div>
            <div className={style.container}>
                <input name="file" ref={fromRef} type="file" accept="image/gif,image/jpeg,image/jpg,image/png,image/webp" onChange={onChangeImage}/>
                <img src="" alt="" style={{maxHeight: 100+'px', display:'block',marginTop:10+'px'}} />
            </div>
            <div className={style.container}>
                <label htmlFor="prix">价格</label>
                <input name="prix" type="text" id="prix" onChange={handleChange("prix")} placeholder={productById.prix}/>
            </div>
            <div className={style.container}>
                <label htmlFor="prix_offre">促销价</label>
                <input type="text" id="prix_offre" name="prix_offre" onChange={handleChange("prix_offre")} placeholder={productById.prix_offre}/>
            </div>
            <RangeBar result={handleChange} currentRating={state.rating}/>
            <button type='submit' className={style.submit}>提交</button>
        </form>
        </>
    )
}

export default ModifyProduct