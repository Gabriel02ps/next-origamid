'use client'

import { getCookie } from '@/actions/get-cookie'

export default function Cookie() {
  async function handleClick() {
    const token = await getCookie('token')
    console.log(token)
  }

  return (
    <div>
      <h2>Cookie: </h2>
      <button onClick={handleClick}>Pegar cookie</button>
    </div>
  )
}
