import React, { useEffect, useReducer } from 'react'
import ReactDOM from 'react-dom'

export function fetchReducer(state, action) {
  if (action.type === 'fetch') {
    return {
      ...state,
      loading: true,
    }
  } else if (action.type === 'success') {
    return {
      data: action.data,
      error: null,
      loading: false,
    }
  } else if (action.type === 'error') {
    return {
      ...state,
      error: 'Error fetching data. Try again',
      loading: false,
    }
  } else {
    throw new Error(`That action type isn't supported.`)
  }
}

export default function useFetch(url) {
  const [state, dispatch] = useReducer(fetchReducer, {
    data: null,
    error: null,
    loading: true,
  })

  useEffect(
    () => {
      dispatch({ type: 'fetch' })

      fetch(url)
        .then(res => res.json())
        .then(data => dispatch({ type: 'success', data }))
        .catch(e => {
          console.warn(e.message)
          dispatch({ type: 'error' })
        })
    },
    [url]
  )

  return {
    loading: state.loading,
    data: state.data,
    error: state.error,
  }
}
