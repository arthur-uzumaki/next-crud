import { Cliente } from "@/core/Cliente";
import { ClienteRepositorio } from "@/core/ClienteRepositorio";
import firebass from "../config";


export class ColecaoCliente implements ClienteRepositorio {

   conversor = {
    toFirestore(cliente: Cliente) {
      return {
        nome: cliente.nome,
        idade: cliente.idade,
      }
    },

    fromFirestore(snapshot: firebass.firestore.QueryDocumentSnapshot, options: firebass.firestore.SnapshotOptions): Cliente {
      const dados = snapshot?.data(options)
      return new Cliente(dados.nome, dados.idade, snapshot?.id)
    }


  }


  async salvar(cliente: Cliente): Promise<Cliente> {
    if (cliente?.id) {
      await this.colecao().doc(cliente.id).set(cliente)
      return cliente

    } else {
      const docReferencia = await this.colecao()?.add(cliente)
      const doc = await docReferencia.get()

      return doc.data() ?? cliente
    }
    

  }

  async excluir(cliente: Cliente): Promise<void> {
    return this.colecao().doc(cliente.id).delete()
  }

  async obterTodos(): Promise<Cliente[]> {
     const query = await this.colecao().get()
     return query.docs.map(doc => doc.data()) ?? []
  }

  private colecao() {

    return firebass.firestore().collection('cliente').withConverter(this.conversor)
  }

}

