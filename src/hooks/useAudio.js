// hooks/useAudio.js
import { Howl } from 'howler'
import { useRef } from 'react'

export default function useAudio(src) {
  const sound = useRef(null)

  if (!sound.current) {
    sound.current = new Howl({
      src: [src],
      volume: 0.5,
      preload: true
    })
  }

  return sound.current
}
