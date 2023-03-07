import React from 'react';
import style from './NotFound.module.scss';
import { Link } from 'react-router-dom';

//Page NotFound
const NotFound = () => {
  return (
    <div>
      <div className={style.notFound}>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to='/'>Retourner sur la page d'accueil</Link>
      </div>
    </div>
  );
};

export default NotFound;
