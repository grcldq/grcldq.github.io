import React from 'react'
import layoutStyles from '../styles/layout.module.scss'

export default function Layout(props) {
  return (
    <div className={layoutStyles.container}>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  )
}
