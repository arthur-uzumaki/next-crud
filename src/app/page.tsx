
"use client"

import { Botao } from "@/components/Botao/Botao";
import { Formulario } from "@/components/Formulario/Formulario";
import { Layout } from "@/components/Layout/Layout";
import { Tabela } from "@/components/Tabela/Tabela";
import { useClient } from "@/hooks/useClientes";

export default function Home() {
  const {clienteSelecionado, exbirTabela, clienteExluido , novoCliente, cliente, clientes, salvarCliente, tabelaVisivel} = useClient()
  
  return (
    <div className="h-screen flex items-center justify-center text-white">

      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao onclick={novoCliente} cor="green" className="mb-4 bg-green-500">

                Novo Cliente

              </Botao>

            </div>
            <Tabela
                clientes={clientes}
                clienteExluido={clienteExluido}
                clienteSelecionado={clienteSelecionado}
            />

          </>

        ) : (

          <Formulario
            clienteMudou={salvarCliente}
            cliente={cliente}
            cancelado={exbirTabela} />
        )}
      </Layout>
    </div>
  )
}

