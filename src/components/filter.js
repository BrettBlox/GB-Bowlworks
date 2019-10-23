import React from 'react'

import '../styles/filter.css'

const Filter = ({ filters, handleFilter, filter }) => {
  function handleClick(e) {
    handleFilter(e.target.dataset.filter)
  }

  return (
    <div className="cover">
      <div className="card description">
        <h2 className="gallery-title">Gallery</h2>
        <hr />
        <div className="filters">
          {Object.keys(filters).map(tag => {
            console.log(tag)
            const currentFilter = tag
            const filterText = filters[tag]
            return (
              <span
                key={`filter-${currentFilter}`}
                className={
                  currentFilter === filter ? `filter filter--active` : `filter`
                }
                data-filter={currentFilter}
                onClick={handleClick}
              >
                {filterText}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Filter
