"use client"

import { useEffect, useRef } from "react"

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext("2d")
    if (!context) return

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    const pointer = { x: -1000, y: -1000 }
    let particles: Particle[] = []
    let frame = 0
    let width = 0
    let height = 0

    const createParticles = () => {
      const count = Math.min(120, Math.max(55, Math.floor(width / 12)))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        radius: Math.random() * 2 + 1.8,
      }))
    }

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      width = bounds.width
      height = bounds.height
      canvas.width = Math.floor(width * pixelRatio)
      canvas.height = Math.floor(height * pixelRatio)
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      createParticles()
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i]

        if (!reducedMotion) {
          particle.x += particle.vx
          particle.y += particle.vy

          if (particle.x < -10 || particle.x > width + 10) particle.vx *= -1
          if (particle.y < -10 || particle.y > height + 10) particle.vy *= -1
        }

        for (let j = i + 1; j < particles.length; j += 1) {
          const neighbor = particles[j]
          const dx = particle.x - neighbor.x
          const dy = particle.y - neighbor.y
          const distance = Math.hypot(dx, dy)

          if (distance < 140) {
            context.beginPath()
            context.moveTo(particle.x, particle.y)
            context.lineTo(neighbor.x, neighbor.y)
            context.strokeStyle = `rgba(55, 70, 150, ${0.34 * (1 - distance / 140)})`
            context.lineWidth = 1
            context.stroke()
          }
        }

        const pointerDistance = Math.hypot(
          particle.x - pointer.x,
          particle.y - pointer.y,
        )
        if (pointerDistance < 190) {
          context.beginPath()
          context.moveTo(particle.x, particle.y)
          context.lineTo(pointer.x, pointer.y)
          context.strokeStyle = `rgba(55, 70, 150, ${0.42 * (1 - pointerDistance / 190)})`
          context.lineWidth = 1.2
          context.stroke()
        }

        context.beginPath()
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        context.fillStyle = "rgba(45, 59, 145, 0.82)"
        context.fill()
      }

      if (!reducedMotion) frame = requestAnimationFrame(draw)
    }

    const onPointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect()
      pointer.x = event.clientX - bounds.left
      pointer.y = event.clientY - bounds.top
    }

    const onPointerLeave = () => {
      pointer.x = -1000
      pointer.y = -1000
    }

    resize()
    draw()
    window.addEventListener("resize", resize)
    canvas.addEventListener("pointermove", onPointerMove)
    canvas.addEventListener("pointerleave", onPointerLeave)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("pointermove", onPointerMove)
      canvas.removeEventListener("pointerleave", onPointerLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  )
}
