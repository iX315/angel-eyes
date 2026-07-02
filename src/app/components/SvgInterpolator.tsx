import {Spring, animated} from 'react-spring'
import {interpolate} from 'polymorph-js'
import {CSSProperties} from 'react'

type SvgInterpolatorProps = {
  previous?: string
  current?: string
  style?: CSSProperties
}

export const SvgInterpolator = ({previous = 'M1,1', current = 'M5,5', style}: SvgInterpolatorProps) => (
  <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg" style={style}>
    <defs>
      <linearGradient id="gradient" x1="100%" y1="0%" x2="0%" y2="0%">
        <stop className="gradient-start" offset="0%" stopColor="#FFD194" />
        <stop className="gradient-end" offset="100%" stopColor="#D1913C" />
      </linearGradient>
    </defs>
    <g>
      <Spring reset from={{ t: 0 }} to={{ t: 1 }}>
        {({ t }) => <animated.path stroke={`url(#gradient)`} d={t.to(interpolate([previous, current]))} />}
      </Spring>
    </g>
  </svg>
)
