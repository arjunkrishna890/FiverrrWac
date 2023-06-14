import React from 'react';
import Featured from '../../components/featured/Featured';
import Trustedby from '../../components/Trustedby/Trustedby';
import Slide from '../../components/slide/Slide';
import {cards} from '../../data.js';
import { projects } from '../../data.js';
import Catcard from '../../components/catCard/Catcard';
import ProjectCard from '../../components/projectCard/Projectcard';
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
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              liverr <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Liverr Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide> 
    </div>
  )
}

export default Home