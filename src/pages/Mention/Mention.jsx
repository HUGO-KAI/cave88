import style from "./Mention.module.scss";

const Mention =() => {
    return (
        <div className={style.container}>
            <h2>MENTIONS LÉGALES</h2>
            <p>Le site cave88vip.com est la propriété de la société cave88 SAS
            RCS Bobigny B 830 250 353, capital social de 10000 euros</p>
            <p>87 AV VICTOR HUGO</p>
            <p>93300 AUBERVILLIERS</p>
            <p>Téléphone : +33 (0)6 42 88 88 68</p>
            <p>cave88vip@gmail.com</p>
            <p>Directeur de la publication : chaofa REN</p>
            <p>Conception et Réalisation : Hugo kai TAN</p>  
            <h3>Hébergement :</h3>
            <p>Hébergeur : Digital Ocean</p>
            <p>Société : Digital Ocean</p>
            <p>Adresse web : https://www.digitalocean.com/</p>
            <p>Adresse postale : 101 Avenue of the Americas, New York 10013 United States of America</p>
            <p>Téléphone : +1.6463978051</p>
            <p>Adresse électronique (E-Mail) : contact@digitalocean.com</p>
            <h3>Accès au site</h3>
            <p>Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d'une nécessité de maintenance.
En cas de modification, interruption ou suspension du Site, l'Editeur ne saurait être tenu responsable.</p>
            <h3>Collect des données</h3>
            <p>Le site est exempté de déclaration à la Commission Nationale Informatique et Libertés (CNIL) dans la mesure où il ne collecte aucune donnée concernant les utilisateurs.
 Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site, sans autorisation de l’Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.</p>
        </div>
    )
}

export default Mention;