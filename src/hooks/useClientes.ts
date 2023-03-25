import { ColecaoCliente } from "@/backend/db/ColecaoCliente"
import { Cliente } from "@/core/Cliente"
import { ClienteRepositorio } from "@/core/ClienteRepositorio"
import { useEffect, useState } from "react"
import { useTabelaOuForm } from "./useTabelaOuForm"


export function useClient(){

     
  const repo: ClienteRepositorio = new ColecaoCliente()
   const {tabelaVisivel , formularioVisivel , exbirFormulario ,exbirTabela} = useTabelaOuForm()
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])


  useEffect(obterTodo , [])
  
    function obterTodo(){
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      exbirTabela()
    })
  }
  
   async function salvarCliente (cliente:Cliente)  {
     await repo.salvar(cliente )
     obterTodo()
   }

  async function clienteExluido(cliente: Cliente){
    await repo.excluir(cliente)
    obterTodo()
  }

  function novoCliente() {
      setCliente(Cliente.vazio())
     exbirFormulario()
  }
  function clienteSelecionado(cliente: Cliente) {
      setCliente(cliente)
     exbirFormulario()
  }

  return {
    tabelaVisivel,
    formularioVisivel,
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    clienteExluido,
    clienteSelecionado,
    obterTodo,
    exbirTabela
  }
}