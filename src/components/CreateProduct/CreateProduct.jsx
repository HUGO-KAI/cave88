import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RangeBar from '../RangeBar/RangeBar';
import style from './CreateProduct.module.scss'
import axios from 'axios';
import '../../globalData';
const url = global.api.url;

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
    const navigate = useNavigate();

    //Gérer le formulaire
    const handleChange = (dataType) => {
        return (e) => setState({...state,[dataType]: e.target.value});
    }

    //Gérer l'image
    const onChangeImage = (e) => {
        setImage(e.target.files[0]);
        let fileSize = parseInt(e.target.files[0].size/1000);
        fromRef.current.innerHTML = `文件大小${fileSize}k -(不能大于1000k)`;
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
                navigate('/admin');
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
            <div className={style.containerImg}>
                <input name="file" ref={fromRef} type="file" accept="image/gif,image/jpeg,image/jpg,image/png,image/webp" onChange={onChangeImage}/>
                <p ref={fromRef}></p>
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