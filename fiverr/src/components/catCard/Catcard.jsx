import React from 'react'
import { Link } from 'react-router-dom';
import './CatCard.scss'

function Catcard({item}) {
  return (
    <Link to='/gigs'>
     <div className='catCard'>
        <img src={item.img}/>
        <span className='desc'>{item.desc}</span>
        <span className='title'>{item.title}</span>

    </div>
    </Link>
   
  )
}

export default Catcard