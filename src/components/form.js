import React from 'react'
import { FaExclamationCircle, FaRegTimesCircle } from 'react-icons/fa'

export default function Form() {
  const formAlert = React.useRef()
  const formText = React.useRef()

  const updateFormAlert = (text, isSuccess) => {
    formText.current.innerHTML = text
    formAlert.current.classList.remove('hidden')

    if (isSuccess) {
      formAlert.current.classList.remove('failed')
      formAlert.current.classList.add('success')
    } else {
      formAlert.current.classList.remove('success')
      formAlert.current.classList.add('failed')
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        updateFormAlert('Thank you! Your form has been received.', true)
      } else {
        updateFormAlert('Oops. Something went wrong. ☹️', false)
      }
    }
    xhr.send(data)
  }

  return (
    <form
      action="https://formspree.io/f/xaylpgeo"
      className="col-container"
      method="POST"
      name="contact"
      onSubmit={handleSubmit}
    >
      <div ref={formAlert} className="form-alert hidden">
        <FaExclamationCircle className="form-icon" />
        <p ref={formText}></p>
        <FaRegTimesCircle
          className="form-close-btn"
          onClick={() => formAlert.current.classList.add('hidden')}
        />
      </div>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Message:
        <textarea type="text" name="message" rows="4" required />
      </label>
      <button type="submit">Send</button>
    </form>
  )
}
