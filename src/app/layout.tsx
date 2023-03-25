import { ReactNode } from 'react'
import '../styles/globo.css'

import { Roboto } from '@next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: '500',
  style:'italic',
  display:'block'
  
})

interface RootLayoutProps{
  children:ReactNode
}

export default function RootLayout({children}:RootLayoutProps){
  return (
    <html lang="pt-BR" className={roboto.className}>

      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      
      <head />
     
      <body className='bg-background'>
      
     
        {children}
      </body>
    </html>
  )
}
