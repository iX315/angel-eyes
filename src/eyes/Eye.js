import React from 'react'
import closed from './paths/closed'
import angry from './paths/angry'
import open from './paths/open'
import happy from './paths/happy'
import love from './paths/love'
import { Spring, animated } from 'react-spring/renderprops'
import { interpolate } from 'flubber'

class Eye extends React.Component {
  constructor(props) {
    super(props)
    let paths = [closed, angry(props), open, happy, love]
    this.interpolators = []
    for (let i = 0; i < paths.length; i++) {
      this.interpolators.push(
        interpolate(paths[i], paths[i + 1] || paths[0], { maxSegmentLength: 0.5 })
      )
    }
    this._x1 = props.position === 'left' ? "100%" : "0%"
    this._x2 = props.position === 'right' ? "100%" : "0%"
  }

  render() {
    const interpolator = this.interpolators[this.props.mode]
    return (
      <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`gradient-${this.props.position}`} x1={this._x1} y1="0%" x2={this._x2} y2="0%">
            <stop className="gradient-start" offset="0%" stopColor="#FFD194" />
            <stop className="gradient-end" offset="100%" stopColor="#D1913C" />
          </linearGradient>
        </defs>
        <g>
          <Spring
            reset
            native
            from={{ t: 0 }}
            to={{ t: 1 }}>
            {({ t }) => <animated.path stroke={`url(#gradient-${this.props.position})`} d={t.interpolate(interpolator)} />}
          </Spring>
        </g>
      </svg>
    )
  }
}
export default Eye