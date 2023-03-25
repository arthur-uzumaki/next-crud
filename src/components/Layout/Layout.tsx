import { ReactNode } from "react";
import { Titulo } from "../Titulo/Titulo";

interface LayoutProps{
  titulo: string
  children: ReactNode
}

export function Layout({titulo , children}: LayoutProps){

  return(
    <div className=" flex flex-col w-2/3 bg-white text-zinc-800  rounded-md">

        <div>
          <Titulo>
              {titulo}
          </Titulo>
            <div className="p-6">
            {children}
            </div>
        </div>
    </div>
  )
}