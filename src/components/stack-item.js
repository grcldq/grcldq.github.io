import React from 'react'
import * as DiIcons from 'react-icons/di'
import * as GrIcons from 'react-icons/gr'

import OpenWc from '../data/assets/openwc.svg'

export default function StackItem({ icon, title, isCustom }) {
  const getIcon = () => {
    if (isCustom) {
      // add custom icons
      return OpenWc
    }

    return DiIcons[icon] || GrIcons[icon]
  }

  return (
    <div className="stack-item">
      {React.createElement(getIcon(), {
        className: isCustom ? 'svg-icon' : '',
      })}
      <p style={{ fontSize: '16px', marginTop: '5px' }}>{title}</p>
    </div>
  )
}
