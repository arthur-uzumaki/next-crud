import { ReactNode } from "react"

interface TituloProps{
  children: ReactNode
}

export function Titulo({children}:TituloProps) {
  return (
    <div className="flex flex-col justify-center ">
      <h1 className="px-5 py-2 text-2xl">{children}</h1>
      <hr className="border-2 border-violet-700 "/>
    </div>
  )
}