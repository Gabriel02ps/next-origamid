import { getAula } from '@/api/cursos'

type PageParams = {
  params: {
    curso: string
    aula: string
  }
}

export default async function AulaPage({ params }: PageParams) {
  const aula = await getAula(params.curso, params.aula)

  return (
    <main>
      <h1>Aula: {aula.nome}</h1>
      <p>{aula.descricao}</p>
      <p>Tempo de aula: {aula.tempo}</p>
    </main>
  )
}
