'use client'

import { adicionarProduto } from '@/actions/adicionar-produto'
import { Produto } from '@/app/produtos/page'
import React from 'react'

export interface AdicionarProdutoProps {}

export default function AdicionarProduto(props: AdicionarProdutoProps) {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data: Produto = {
      nome: event.currentTarget.nome.value,
      descricao: event.currentTarget.descricao.value,
      preco: Number(event.currentTarget.preco.value),
      estoque: Number(event.currentTarget.estoque.value),
      importado: event.currentTarget.importado.value.checked ? 1 : 0
    }
    await adicionarProduto(data)

    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" name="nome" />
      <label htmlFor="preco">Preço</label>
      <input type="number" id="preco" name="preco" />
      <label htmlFor="descricao">Descrição</label>
      <input type="text" id="descricao" name="descricao" />
      <label htmlFor="estoque">Estoque</label>
      <input type="number" id="estoque" name="estoque" />
      <label htmlFor="importado">
        {' '}
        <input type="checkbox" id="importado" name="importado" /> Importado
      </label>
      <button type="submit">Adicionar</button>
    </form>
  )
}
