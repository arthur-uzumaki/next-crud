'use client'

import { Cliente } from "@/core/Cliente"
import { InconeEdicao, InconeLixo } from "../Icone/Icone"


interface TabelaProps {
  clientes: Cliente[]
  clienteSelecionado?: (clinte: Cliente) => void
  clienteExluido?: (clinte: Cliente) => void

}

export function Tabela({clientes ,clienteExluido ,clienteSelecionado}:TabelaProps) {
 
  const  exibirAcoes = clienteExluido || clienteSelecionado

  function renderizarAcoes(cliente: Cliente) {
    return (
      <td className='flex '>
        {clienteSelecionado ? (
          <button onClick={() => clienteSelecionado?.(cliente)} className='flex justify-center items-center rounded-full p-2 m-1 hover:bg-purple-50'>
            {InconeEdicao}
          </button>
        ) : false}

        {clienteExluido ? (
           <button onClick={() => clienteExluido?.(cliente)} className='flex justify-center items-center rounded-full p-2 m-1 hover:bg-purple-50'>
            {InconeLixo}
         </button>
        ) : false}

      </td>
    )
  }

  function rendeziraCabecalho(){
    return (
      <tr className=''>
        <td className="text-left  p-4">Código</td>
        <td className="text-left  p-4">Nome</td>
        <td className="text-left  p-4">Idade</td>
        {exibirAcoes ? <td className="p-4">Ações</td> : false}
      </tr>
    )
  }

    function rendeziraDados () {
     return  clientes?.map((clientes, i) => {
        return (
          <tr key={clientes.id} className={`${i % 2 === 0 ? 'bg-violet-200' : 'bg-violet-100'}  `}>
            <td className='text-left p-4'>{clientes.id}</td>
            <td className='text-left p-4'>{clientes.nome}</td>
            <td className='text-left p-4'>{clientes.idade}</td>
            {exibirAcoes ? renderizarAcoes(clientes) : false}
          </tr>
        )
      })
    }

  return (
    <table className='w-full rounded-xl overflow-hidden'>
      <thead className='text-gray-100 bg-gradient-to-r from-violet-500 to-violet-800'>
        {rendeziraCabecalho()}

      </thead>
      
      <tbody>
        {rendeziraDados()}
      </tbody>
      
    </table>
    
  )
}