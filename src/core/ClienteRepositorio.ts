import { Cliente } from "./Cliente";

export interface ClienteRepositorio{

  salvar(cliente: Cliente):Promise<Cliente>
  excluir(cliente: Cliente):Promise<void>
  obterTodos():Promise<Cliente[]>
}