import React from 'react'
import { navigate } from 'gatsby'
import styled from 'styled-components'

import Cover from '../styles/cover'

const filters = {
  bowlworks: `all`,
  open: `open form`,
  closed: `closed form`,
  lidded: `lidded`,
  salad: `salad`,
  misc: `misc`,
}

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
  background-color: var(--blood);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(var(--gold), var(--gold));
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
      background: var(--gold);
    }

    @media only screen and (max-width: 857px) {
      &:after {
        width: 20%;
        background: var(--gold);
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
    padding-top: 1.25rem;
  }
`

const FilterActive = styled(FilterInactive)`
  transform: translateY(-3px) scale(1.2);
  background-color: var(--gold);
  color: var(--gold);

  &:after {
    border-bottom: 1px solid var(--gold);
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    bottom: 0;
    margin: 0 auto;

    @media only screen and (max-width: 857px) {
      border-bottom: 1px solid var(--gold);
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

const handleFilterDefault = currentFilter => {
  switch (currentFilter) {
    case 'bowlworks':
      navigate('/store')
      break
    case 'closed':
      navigate('/store/closed-form')
      break
    case 'open':
      navigate('/store/open-form')
      break
    case 'salad':
      navigate('/store/salad')
      break
    case 'misc':
      navigate('/store/misc')
      break
    case 'lidded':
      navigate('/store/lidded')
      break
    default:
      return null
  }
}

const Filter = ({ handleFilter, filter, title }) => {
  function handleClick(e) {
    if (handleFilter) {
      handleFilter(e.target.dataset.filter)
    } else {
      handleFilterDefault(e.target.dataset.filter)
    }
  }

  return (
    <Cover text='center'>
      <h2>{title}</h2>
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
    </Cover>
  )
}

export default Filter
