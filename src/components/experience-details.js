import React from 'react'
import experienceStyles from '../styles/experience-details.module.scss'
import { MdFiberManualRecord } from 'react-icons/md'

export default function ExperienceDetails(props) {
  return (
    <div className={experienceStyles.experienceDetails}>
      <div className={experienceStyles.icon}>
        <MdFiberManualRecord />
        <div className={experienceStyles.verticalLine}></div>
      </div>
      <div className={experienceStyles.text}>
        <h3>{props.establishment}</h3>
        <p>{props.title}</p>
      </div>
    </div>
  )
}
