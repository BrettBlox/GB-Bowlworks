import { useState } from 'react'
import { navigate } from 'gatsby'

const useForm = () => {
  const [state, setState] = useState({})

  const encode = data =>
    Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&')

  const handleSubmit = e => {
    if (e) {
      e.preventDefault()
      const form = e.target
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...state,
        }),
      })
        .then(() => navigate(form.getAttribute('action')))
        .catch(error => alert(error))
    }
  }

  const handleInputChange = e => {
    e.persist()
    setState(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }))
  }
  return {
    handleSubmit,
    handleInputChange,
    state,
  }
}

export default useForm
