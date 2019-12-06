import React from 'react'
import styled from 'styled-components'

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

  @media only screen and (max-width: 857px) {
    flex-direction: column;
    padding: 0;
  }
`

const FilterInactive = styled.span`
  background-color: hsl(0, 100%, 18%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(#d7a150, #d7a150);
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 0% 100%;
  padding: 0.3rem 0;
  margin: 0 2rem;
  cursor: pointer;
  font-size: 1.8rem;
  transition: all 0.3s ease;

  &:hover {
    background-size: 100% 100%;

    &:after {
      width: 100%;
      background: #d7a150;
    }

    @media only screen and (max-width: 857px) {
      &:after {
        width: 20%;
        background: #d7a150;
      }
    }
  }

  &:after {
    content: '';
    display: block;
    margin: auto;
    height: 1px;
    width: 0px;
    background: transparent;
    transition: width 0.3s ease, background-color 0.5s ease;
  }

  @media only screen and (max-width: 981px) {
    font-size: 1.6rem;
  }
  @media only screen and (max-width: 919px) {
    font-size: 1.4rem;
  }
  @media only screen and (max-width: 857px) {
    font-size: 1.6rem;
    padding-top: 20px;
  }
`

const FilterActive = styled(FilterInactive)`
  transform: translateY(-3px) scale(1.2);
  background-color: #d7a150;

  &:after {
    border-bottom: 1px solid #d7a150;
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    bottom: 0;
    margin: 0 auto;

    @media only screen and (max-width: 857px) {
      border-bottom: 1px solid #d7a150;
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      width: 20%;
      bottom: 0;
      margin: 0 auto;
    }
  }
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
            const currentFilter = tag
            const filterText = filters[tag]
            return currentFilter === filter ? (
              <FilterActive key={`filter-${currentFilter}`} data-filter={currentFilter} onClick={handleClick}>
                {filterText}
              </FilterActive>
            ) : (
              <FilterInactive key={`filter-${currentFilter}`} data-filter={currentFilter} onClick={handleClick}>
                {filterText}
              </FilterInactive>
            )
          })}
        </Filters>
      </FilterBody>
    </Cover>
  )
}

export default Filter
