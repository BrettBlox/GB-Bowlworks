import React, { useState } from 'react'

import '../styles/filter.css'

const Filter = ({ filters }) => {
  const [filter, setFilter] = useState(``)
  return (
    <div className="filters-container">
      <h2 className="gallery-title">Gallery</h2>
      <div className="filters">
        {Object.keys(filters).map(tag => {
          const currentFilter = filters[tag]
          return (
            <span
              key={`filter-${currentFilter}`}
              className={
                currentFilter === filter ? `filter filter--active` : `filter`
              }
              onClick={() => {
                setFilter(currentFilter)
              }}
            >
              {currentFilter}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default Filter
