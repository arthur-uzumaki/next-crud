"use client"

import { Cliente } from "@/core/Cliente";
import { useState } from "react";
import { Botao } from "../Botao/Botao";
import { Entrada } from "./Entrada/Entrada";

interface FormularioProps{
  cliente: Cliente
  clienteMudou?: (cliente:Cliente) => void 
  cancelado?: () => void
}

export function Formulario({cliente , cancelado ,clienteMudou}:FormularioProps){
  const id = cliente?.id
  const [nome , setNome] = useState(cliente?.nome ?? '')
  const [idade , setIdade] = useState(cliente?.idade ?? 0)
  return(
    <div>
      {id ? (
        <Entrada 
        somenteLeitura
        texto="Código"
        valor={id}
        className='mb-4'
        />

      ):false}

      <Entrada 
      texto="Nome"
      valor={nome}
      valorMudou={setNome}
      className='mb-16'
      />

      <Entrada 
      texto="Idade"
      valor={idade}
      tipo="number"
      valorMudou={setIdade}
      />

      <div className="flex justify-end mt-7">
        <Botao onclick={() => clienteMudou?.(new Cliente(nome , +idade , id)) } cor="blue" className="bg-blue-500 mr-2">
          {id ? 'Alterar' : 'Salvar'}
        </Botao >

        <Botao onclick={cancelado} className="bg-gray-500">
          Cancelar
        </Botao>
      </div>
    </div>
  )
}