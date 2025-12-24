// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.scss'

import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
  smooth: true,
  lerp: 0.08,
  wheelMultiplier: 1,
  touchMultiplier: 1.5
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

