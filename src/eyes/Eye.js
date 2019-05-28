import React from 'react';
import closed from './paths/closed'
import angry from './paths/angry'
import open from './paths/open'
import happy from './paths/happy'
import love from './paths/love'


const Eye = (props) => {
  let selPath = ""
  if(props.mode === 'closed') selPath = closed
  if(props.mode === 'angry') selPath = angry(props)
  if(props.mode === 'open') selPath = open
  if(props.mode === 'happy') selPath = happy
  if(props.mode === 'love') selPath = love

  let _x1 = props.position === 'left' ? "100%" : "0%"
  let _x2 = props.position === 'right' ? "100%" : "0%"

  return (
      <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`gradient-${props.position}`} x1={_x1} y1="0%" x2={_x2} y2="0%">
            <stop className="gradient-start" offset="0%" stopColor="#FFD194" />
            <stop className="gradient-end" offset="100%" stopColor="#D1913C" />
          </linearGradient>
        </defs>
        <g>
          <path stroke={`url(#gradient-${props.position})`} d={`${selPath}`} />
        </g>
      </svg>
  )
}
export default Eye