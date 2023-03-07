import React, { useRef, useState } from 'react';
import RangeBar from '../RangeBar/RangeBar';
import style from './CreateProduct.module.scss'
import axios from 'axios';
const url = process.env.REACT_APP_API_URL;

//Component pour créer un product
const CreateProduct =() => {
    const [state, setState] = useState({
            title: '',
            description: '',
            rating: '5',
            prix: '',
            prix_offre: '',
            region: '',
            AOC: ''
    });
    const [image, setImage] = useState(null);
    const fromRef = useRef();

    //Gérer le formulaire
    const handleChange = (dataType) => {
        return (e) => setState({...state,[dataType]: e.target.value});
    }

    //Gérer l'image
    const onChangeImage = (e) => {
        setImage(e.target.files[0]);
    }

    //Gérer submit du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();
        const product = state;
        try {
            const formData = new FormData();
            const token = sessionStorage.getItem("token"); 
            formData.append('image', image);
            formData.append('product', JSON.stringify(product));
            const res = await axios.post(`${url}/api/product`, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': token
              }
            });
            if (res.status === 201) {
                window.alert('Nouveau vins enregistré! 红酒创建成功!');
                window.location.href = '/Admin';
            }
          } catch (err) {
            alert(err.message);
          }
        }
            
    return (
        <>
        <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.container}>
                <label htmlFor="title">酒名</label>
                <input type="text" name="title" id="title" onChange={handleChange("title")} required/>
            </div>
            <div className={style.container}>
                <label htmlFor="region">大区</label>
                <input type="text" name="region" id="region" required onChange={handleChange("region")}/>
            </div>
            <div className={style.container}>
                <label htmlFor="AOC">产区</label>
                <input type="text" name="AOC" id="AOC" required onChange={handleChange("AOC")} />
            </div>
            <div className={style.container}>
                <label htmlFor="description">口感</label>
                <textarea name="description" id="description" className={style.description} rows="5" onChange={handleChange("description")} ></textarea>
            </div>
            <div className={style.container}>
                <input name="file" ref={fromRef} type="file" accept="image/gif,image/jpeg,image/jpg,image/png,image/webp" onChange={onChangeImage}/>
                <img src="" alt="" style={{maxHeight: 100+'px', display:'block',marginTop:10+'px'}} />
            </div>
            <div className={style.container}>
                <label htmlFor="prix">价格</label>
                <input name="prix" type="text" id="prix" required onChange={handleChange("prix")}/>
            </div>
            <div className={style.container}>
                <label htmlFor="prix_offre">促销价</label>
                <input type="text" id="prix_offre" name="prix_offre" onChange={handleChange("prix_offre")} />
            </div>
            <RangeBar result={handleChange} currentRating={state.rating?state.rating:"5"}/>
            <button type='submit' className={style.submit}>提交</button>
        </form>
        </>
    )
}


export default CreateProduct