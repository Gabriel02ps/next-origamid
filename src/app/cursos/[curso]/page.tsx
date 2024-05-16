import { getCurso } from '@/api/cursos'
import Link from 'next/link'

type PageParams = {
  params: {
    curso: string
  }
}

export default async function CursoPage({ params }: PageParams) {
  const curso = await getCurso(params.curso)

  return (
    <main>
      <h1>{curso.nome}</h1>
      <p>{curso.descricao}</p>
      <p>Total horas: {curso.total_horas}</p>
      <p>Total aulas: {curso.total_aulas}</p>

      <ul>
        {curso.aulas.map((aula) => (
          <li key={aula.slug}>
            <Link href={`/cursos/${params.curso}/${aula.slug}`}>
              {aula.nome}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
