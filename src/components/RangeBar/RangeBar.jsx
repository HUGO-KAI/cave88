import { useRef } from 'react';
import style from './RangeBar.module.scss'

//Component RangeBar
function RangeBar (props){
  const show = useRef(null);
  
  return (
    <div className={style.rangeBox}>
        <label htmlFor="rating">评分</label>
        <input id="rating" type="range" min="0" max="5" name="rating" onChange={props.result("rating")} />
        <span ref={show}>{props.currentRating?props.currentRating:5}</span>
    </div>
  );
};

export default RangeBar