import React from 'react';
import Featured from '../../components/featured/Featured';
import Trustedby from '../../components/Trustedby/Trustedby';
import Slide from '../../components/slide/Slide';
import {cards} from '../../data.js';
import Catcard from '../../components/catCard/Catcard';
import './Home.scss';

function Home() {
  return (
    <div className='Home'>
      <Featured/>
      <Trustedby/>
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map(card=>(
          <Catcard key={card.id} item={card}/>
        ))}
      </Slide>
      <div className='features'>
        <div className='container'>
            <div className='item'>
              <h1>A whole world of freelance talent at your fingertips</h1>
              <div className='title'>
                <img src='/img/check.png' alt=''/>
                The best for every budget
              </div>
              <p>
              Find the right service for every price point. No hourly rates, just project-based pricing.
              </p>
              <div className='title'>
                <img src='/img/check.png' alt=''/>
                The best for every budget
              </div>
              <p>
              Find the right service for every price point. No hourly rates, just project-based pricing.
              </p>
              <div className='title'>
                <img src='/img/check.png' alt=''/>
                The best for every budget
              </div>
              <p>
              Find the right service for every price point. No hourly rates, just project-based pricing.
              </p>
              <div className='title'>
                <img src='/img/check.png' alt=''/>
                The best for every budget
              </div>
              <p>
              Find the right service for every price point. No hourly rates, just project-based pricing.
              </p>
            </div>
            <div className='item'>
            <video src='https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7' controls poster='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home