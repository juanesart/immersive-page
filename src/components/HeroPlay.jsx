import { useRef } from 'react'
import gsap from 'gsap'

export default function HeroPlay({ onStart }) {
    const heroRef = useRef(null)

    const handleStart = () => {
        gsap.to(heroRef.current, {
            opacity: 0,
            scale: 1.05,
            duration: 0.8,
            ease: 'power2.out',
            onComplete: onStart
        })
    }

    return (
        <section ref={heroRef} className="hero">
            <p>Aunque no lo creas, esto ha sido una de las cosas más difíciles que he hecho, jaja.
                No soy el mejor escribiendo, y mucho menos cuando sé que alguien va a leerlo, pero haré lo posible.
            </p>
            <p>Ah y sube el volumen</p>
            <h1>Comencemos</h1>
            <button onClick={handleStart}>PLAY</button>
        </section>
    )
}
