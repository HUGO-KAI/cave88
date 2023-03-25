import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  background: 'rgb(173 0 54 / 0.5)',
  color: 'white',
  fontWeight: 'bold'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
  {
    url: 'https://cdn.pixabay.com/photo/2016/10/22/20/34/wines-1761613_1280.jpg',
    caption: '阿发酒庄-cave88vip'
  },
  {
    url: 'https://cdn.pixabay.com/photo/2015/03/08/22/35/wine-664832_960_720.jpg',
    caption: '批发零售-Prix grossiste'
  },
  {
    url: 'https://cdn.pixabay.com/photo/2015/03/08/22/34/wine-664826_960_720.jpg',
    caption: '整箱优惠-Hard discount'
  }
];

const proprietes = {
  duration: 2500,
  transitionDuration: 700
}

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...proprietes}>
         {slideImages.map((slideImage, index)=> (
            <div key={index} >
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})`}}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;