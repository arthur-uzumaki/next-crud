import { ReactNode } from "react";


interface BotaoProps{
  cor?: "green" | "blue" | "gray"
  children:ReactNode
  className?:string
  onclick?:() => void
}

export function Botao(props: BotaoProps){
 
 
  return (
     
    <button onClick={props.onclick} className={`bg-${props.cor} text-white px-4 py-2 rounded-md ${props.className}`}>
      {props.children}
    </button>
  )
}