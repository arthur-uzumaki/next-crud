


interface EntradaProps{
  texto: string
  tipo?: 'text' | 'number'
  valor: string | number
  somenteLeitura?: boolean
  valorMudou?: (valor: any) => void
  className?:string
}

export function Entrada({texto ,tipo , valor , somenteLeitura , valorMudou , className}:EntradaProps){

  return (
    <div className={`flex flex-col ${className}`}>
      <label className="mb-2  text-xl">{texto}</label>
      <input 
      className={`text-xl border border-violet-700 rounded-lg focus:outline-none bg-gray-300 px-4 py-2 ${somenteLeitura ? '' : 'focus:bg-white'}`}
      type={tipo ?? 'text'}
      value={valor}
      onChange={e => valorMudou?.(e.target.value)}
      readOnly={somenteLeitura}
      />
    </div>
  )
}