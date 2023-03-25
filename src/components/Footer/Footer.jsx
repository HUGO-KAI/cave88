import React from "react";
import logo from '../../assets/logo-rond.png';
import style from './Footer.module.scss';
import { Link} from 'react-router-dom'

//Components Footer
function Footer (props) {
    return (
    <footer className={style.footer}>
        <div className= {style.footerMain}>
            <div className={style.footerBlock}>
                <div>
                    <img className={style.logo} src={logo} alt="Logo de l'entreprise" />
                </div>
                <div>
                    <p>{props.adr} <br/>{props.ville}</p>
                </div>
                <div>
                    <p>Téléphone : <a href = {"tel:"+props.tel}>{props.tel}</a></p>
                </div>
                <div>
                    <p>Email : <a href = {"mailto:"+props.mail}>{props.mail}</a></p>
                </div>
                <Link to="./mention">Mention légale</Link>
            </div>
        </div>
    </footer>
    )
}

export default Footer;
