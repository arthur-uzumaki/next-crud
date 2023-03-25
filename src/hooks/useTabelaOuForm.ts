import { useState } from "react";


export function useTabelaOuForm(){

  const [visivel , setVisivel] = useState<'tabela'| 'form'>('tabela')

  const exbirTabela = () => setVisivel( 'tabela')
  const exbirFormulario = () => setVisivel('form')

  return {
    formularioVisivel: visivel === 'form',
    tabelaVisivel: visivel === 'tabela',
    exbirTabela,
    exbirFormulario,
  }
}