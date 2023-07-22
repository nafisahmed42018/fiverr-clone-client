import React, { useState } from 'react'
import './Gigs.scss'

import GigCard from '../../components/gigCard/GigCard'
import { gigs } from '../../data'

function Gigs() {
  const [open, setOpen] = useState(false)
  const [sort, setSort] = useState('sales')

  const reSort = (type) => {
    setSort(type)
    setOpen(false)
  }
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">FIVERR &gt; GRAPHICS &DESIGN &gt; </span>
        <h2>AI Artists</h2>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI artists
        </p>
        <div className="filter">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort By :</span>
            <div className="dropdown" onClick={() => setOpen(!open)}>
              <span className="sortType">
                {sort === 'sales' ? 'Best Selling' : 'Newest'}
              </span>
              <img src="./img/down.png" alt="" />
            </div>
            {open && (
              <div className="rightMenu">
                <span onClick={() => reSort('createdAt')}>Newest</span>
                <span onClick={() => reSort('sales')}>Best Selling</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard item={gig} key={gig.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gigs
