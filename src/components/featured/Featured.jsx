import React from 'react'
import './Featured.scss'
function Featured() {
  return (
    <div className="featured">
      <img className="image" src="./img/featured-1.png" alt="" />
      <div className="search-container">
        <div className="search-box">
          <h1>
            Find the perfect <span>freelance services,</span> right away
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder='Try "building mobile app"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
