import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { FC } from 'react'

interface Props {
  children: React.ReactNode
}

const MainLayout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
