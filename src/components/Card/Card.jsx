import React from "react";
import style from './Card.module.scss';
import { Link } from 'react-router-dom';
import Rating from '../../components/Rating/Rating.jsx'

//Component Carte de produit
class Card extends React.Component{
        render(){
            let alcools = this.props.alcools;
            return (
                <main className={style.limitedWidthBlockContainer}>
                    <div className={style.limitedWidthBlock}>
                        <section className={style.cards}>
                        {alcools &&
                            alcools.map((alcool) => (
                            <Link key={alcool._id} to={`/details/${alcool._id}`}>
                                <article>
                                <img src={alcool.imageUrl} alt='nos vins' />
                                <div>
                                    <h3 className={style.title}>{alcool.title}</h3>
                                    <h5 className={style.aoc}>{alcool.AOC}</h5>
                                    <Rating ratings={alcool.rating}/>
                                    {
                                    alcool.prix_offre?<p className={style.prixOffre}>{alcool.prix_offre}€</p>:""
                                    }
                                    {alcool.prix_offre?
                                    <p className={style.prxiAnnuler}>{alcool.prix}€</p>:
                                    <p className={style.prix}>{alcool.prix}€</p>}
                                    <p className={style.plusDeDetail}>Plus de détail...</p>
                                </div>
                                </article>
                            </Link>
                            ))}
                        </section>
                    </div>
                </main>
            )
        }
}

export default Card