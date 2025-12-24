// components/AudioController.jsx
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useAudio from '../hooks/useAudio'

gsap.registerPlugin(ScrollTrigger)

export default function AudioController({ trigger, audio }) {
  const sound = useAudio(audio)

  useEffect(() => {
    if (!trigger?.current) return

    const st = ScrollTrigger.create({
      trigger: trigger.current,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => sound.play(),
      onLeave: () => sound.stop(),
      onEnterBack: () => sound.play(),
      onLeaveBack: () => sound.stop()
    })

    return () => {
      st.kill()
    }
  }, [trigger, sound])

  return null
}

