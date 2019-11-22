import React from 'react'
import styled from 'styled-components'

import '../styles/filter.css'

const Cover = styled.div`
  text-align: center;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));

  h2 {
    text-align: center;
    color: hsl(0, 100%, 18%);
    font-size: 2.25rem;
    margin-bottom: 1rem;
  }
`

const FilterBody = styled.div`
  padding: 20px;
  text-align: center !important;
  font-family: 'Cinzel';
  background-color: #dddfd4;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  grid-column: 1 / -1;
`

const Filters = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 10px;
`

const Filter = ({ filters, handleFilter, filter }) => {
  function handleClick(e) {
    handleFilter(e.target.dataset.filter)
  }

  return (
    <Cover>
      <FilterBody>
        <h2>Gallery</h2>
        <hr />
        <Filters>
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
        </Filters>
      </FilterBody>
    </Cover>
  )
}

export default Filter
