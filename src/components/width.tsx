'use client'
import React, { useEffect, useState } from 'react'

export default function Width() {
  const [ativar, setAtivar] = useState(false)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWidth(document.documentElement.clientWidth)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      <h2 style={{ color: ativar ? '#680' : '#b00' }}>
        Largura da tela: {width}
      </h2>
      <button onClick={() => setAtivar((b) => !b)}>Click</button>
    </div>
  )
}
