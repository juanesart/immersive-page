import { useState, useEffect } from 'react'
import { Howler } from 'howler'
import HeroPlay from './components/HeroPlay'
import ScrollExperience from './components/ScrollExperience'

export default function App() {
  const [started, setStarted] = useState(false)

  const startExperience = () => {
    if (Howler.ctx && Howler.ctx.state === 'suspended') {
      Howler.ctx.resume()
    }
    setStarted(true)
  }

  useEffect(() => {
    document.body.style.overflow = started ? 'auto' : 'hidden'
  }, [started])

  return (
    <>
      {!started && <HeroPlay onStart={startExperience} />}
      {started && <ScrollExperience />}
    </>
  )
}
