'use client'
import { ThemeProvider } from 'next-themes'
import React, { ReactNode } from 'react'

type Props = {
    children:ReactNode
}

const DarkModeProvider = ({children}: Props) => {
  return (
    <ThemeProvider defaultTheme='dark' attribute='class'>
    <div>
        {children}
    </div>
    </ThemeProvider>
  )
}

export default DarkModeProvider