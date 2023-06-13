import React from 'react';
import Slider from 'infinite-react-carousel';
import './Slide.scss'
import {cards} from '../../data.js'
import Catcard from '../catCard/Catcard';

function Slide({children,slidesToShow,arrowsScroll}) {
  return (
    <div className='slide'>
        <div className='container'>
        <Slider  slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
            {children}
        </Slider>
        </div>
    </div>
  )
}

export default Slide