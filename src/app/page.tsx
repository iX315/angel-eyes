'use client'
import { useState } from 'react'
import { SvgInterpolator } from './components/SvgInterpolator'
import { angryOpen, closed, happy, love, open } from './components/eyes/shapes'
import { useInterval } from 'usehooks-ts'

const svgs = [open, angryOpen, closed, happy, love]

export default function Home() {
  const [index, setIndex] = useState(0)

  useInterval(() => {
    if (index >= svgs.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }, 3000)

  return (
    <main>
      <div className="flex min-h-screen items-center justify-around p-24">
        <SvgInterpolator previous={svgs[index - 1] ?? undefined} current={svgs[index]} />
        <SvgInterpolator previous={svgs[index - 1] ?? undefined} current={svgs[index]} style={{ transform: 'scale(-1, 1)' }} />
      </div>
    </main>
  )
}
