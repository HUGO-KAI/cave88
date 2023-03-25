import React, {useEffect, useState}from "react";
import { Link, useNavigate } from 'react-router-dom'
import style from './Header.module.scss'
import logo from '../../assets/logo.jpg'
//import banniere from '../../assets/banniere.webp'
import { BsFillTelephoneFill } from "react-icons/bs";
import {MdLocationOn} from "react-icons/md";
import Slideshow from "../Slideshow/Slideshow"

//Component Header
function Header (props) {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const [online,setOnline] = useState()
  const handleClick = () => {
    sessionStorage.clear("token")
    setOnline(false);
    navigate('/');
  }
  useEffect(()=>{
      if (!token) {
        setOnline(false)
      }else {
        setOnline(true)
      }
  },[token])
  return (
    <header>
      <div className ={`${style.limitedWidthBlockContainer} ${style.informations}`} >
        <div className = {style.limitedWidthBlock}>
          <ul>
            <li>
              <BsFillTelephoneFill size="14px" className= {style.informations__phone} />
              <a href = {"tel:"+props.tel}>{props.tel}</a>
            </li>
            <li><MdLocationOn size="16px" className={style.informations__address}/>{props.city}</li>
          </ul>
        </div>
      </div>
      <div className= {`${style.limitedWidthBlockContainer} ${style.menu}`} >
        <div className= {style.limitedWidthBlock} >
          <Link to="./">
            <img className={style.logo} src={logo} alt="Logo de l'entreprise" />
          </Link>
          <nav>
            <ul>
              <li><Link to="./">Accueil</Link></li>
              <li><Link to="./promo">Promo</Link></li>
            {!online?
              <li><Link to="./signIn">Sign in</Link></li>:
              <li className={style.signOut}><span onClick={handleClick}>Sign out</span></li>
            }  
            </ul>
          </nav>
        </div>
      </div>
      {
        /*<img className= {style.banniere} src= {banniere} alt="Baniere" />*/
      }
      <Slideshow />
    </header>
  )
}


export default Header