import React from 'react'
import logoCave from './logoCave.jpg'
import style from './TopJumper.module.scss'

//Component Topjumper pour returner en haut de la page
function TopJumper () {
    return (
        <div  className={style.logoFlotant} onClick={()=>window.scrollTo(0, 0)} title="Up"><img src = {logoCave} alt="Cave88 阿发酒庄" /></div>
    )
}


export default TopJumper