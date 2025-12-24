import { useRef, useEffect } from 'react'
import Section from './Section/Section'
import AudioController from './AudioController'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import scene1 from '../assets/images/scene-1.webp'
import scene2 from '../assets/video/scene-2.mp4'
import audio1 from '../assets/audio/ambient-1.mp3'
import audio2 from '../assets/audio/ambient-2.mp3'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollExperience() {
    const s1 = useRef(null)
    const s2 = useRef(null)
    const s3 = useRef(null)

    useEffect(() => {
        ScrollTrigger.refresh()
    }, [])

    return (
        <main className='main-section'>
            <Section>
                <div ref={s1} className="media">
                    <p>Me preguntaste cómo saber si uno se enamora o si le gusta alguien, lo cual es bastante ambiguo, ¿sabes? No es como que haya una fórmula exacta. Ojalá el mundo fuera como las matemáticas, pero no. Aunque, en parte, eso es lo que le da su encanto.</p>
                    <p>¿Qué puedo decirte de mi parte? No soy un experto ni mucho menos, no sé de dónde sacaste eso, pero yo lo describiría de la siguiente manera: el amor puede manifestarse de muchas formas y no siempre se trata de un amor romántico. Puede comenzar como una atracción de una sola vista y solidificarse poco a poco mientras más conoces a esa persona. Las ganas de conocerla, claro está; las ganas de compartir tu tiempo, de conectar, de poder ser y estar.</p>
                    <p>Incluso puede que sientas todo eso sin ponerte a pensar que es porque esa persona te gusta, hasta que intentas poner sobre la mesa todo lo que te hace sentir. No solo pasar por esa etapa súper intensa del enamoramiento, sino también poder imaginar la cotidianidad con esa persona. Que puedas sentirte nerviosa en algunos momentos, pero que también te dé tranquilidad. Que la emoción no desaparezca y que, aunque haya momentos “aburridos”, no te moleste estar aburrida con esa persona.</p>
                    <p>Obviamente no todo es perfecto y habrá momentos complejos, pero si vale la pena y ambos quieren, seguro se resolverá. Quizás ya hayas sentido algo así, o aún no, o lo sientes y no te das cuenta. Pero adivina qué: solo hay una manera de descubrir estas cosas, y es lo más simple y complicado a la vez… solo hay que vivirlo.</p>
                </div>
                <AudioController trigger={s1} audio={audio1} />
            </Section>

            <Section>
                <div ref={s2} className="media">
                    <p>Ahora, para alivianar el ambiente…</p>
                    <p>¿Podés creer que Google Fotos hace un recap del año? Y este fue el mío…</p>
                    <video src={scene2} autoPlay muted loop />
                    <p>Súper ofendido de que seas la persona que más salga, jajaja, pero bueno… por algo será.</p>
                </div>
                <AudioController trigger={s2} audio={audio2} />
            </Section>
            <Section>
                <div ref={s3} className="media">
                    <p>Por cierto, esto también es en parte para mostrarte/presumirte un poco lo que he avanzado programando. No sé si recuerdas la página que te escribí hace un tiempo, o si siquiera la viste, pero esto es un avance, jaja.</p>
                    <p>En fin, parte de lo que te escribí arriba lo he sentido por ti, así que no puedo decirte de corazón que solo somos amigos. Lo siento…</p>
                    <p>También quiero pedirte perdón por lo de la última vez. En serio, lo siento de mil maneras.</p>
                </div>
                <AudioController trigger={s3} audio={audio1} />
            </Section>
            <Section>
                <div ref={s3} className="media">
                    <p>No sé si querrás volver a hablarme, pero bueno… no está todo, aunque sí es una gran parte de lo que quiero decir.</p>
                    <p>So…</p>
                    <p>Feliz Navidad</p>
                    <p>Feliz año</p>
                    <p>Feliz Cumpleaños</p>
                    <p>Te quiero muchísimo.</p>
                </div>
                <AudioController trigger={s3} audio={audio1} />
            </Section>


        </main>
    )
}
