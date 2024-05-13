'use client'

import { useState } from 'react'

export default function Calculadora() {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [imc, setImc] = useState(0)

  function handleClick() {
    const alturaMetros = altura / 100
    const total = peso / (alturaMetros * alturaMetros)

    setImc(total)
  }

  return (
    <div>
      <label htmlFor="peso">Insira seu peso: </label>
      <input
        type="text"
        id="peso"
        name="peso"
        onChange={(e) => setPeso(Number(e.target.value))}
      />

      <label htmlFor="altura">Insira sua altura: </label>
      <input
        type="text"
        id="altura"
        name="altura"
        onChange={(e) => setAltura(Number(e.target.value))}
      />

      <button onClick={handleClick}>Calcular IMC</button>
      <p>Seu IMC é: {imc.toFixed(2)}</p>
    </div>
  )
}
