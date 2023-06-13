import React from 'react';
import './Featured.scss';

function Featured() {
  return (
    <div className='Featured'>
        <div className='container'>
            <div className='left'>
                    <h1>Find the perfect <i>freelance</i> services for your business</h1>
                    <div className="search">
                    <div className='searchinput'>
                        <img src='./img/search.png' alt=''/>
                        <input type='text' placeholder='Search for any service'/>
                    </div>
                    <button>Search</button>
                  </div>
                  <div className='popular'>
                    <span>Popular</span>
                    <button>Wordpress</button>
                    <button>Web Design</button>
                    <button>Logo Design</button>
                    <button>AI Services</button>
              </div>
            </div>
            <div className='right'>
                <img src='./img/man.png'/>
            </div>
        

    </div>
    </div>
  )
}

export default Featured