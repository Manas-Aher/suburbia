import { Footer } from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import Loading from '../Loading';

type Props = {
    children: React.ReactNode;
}

export default function Layout({children}: Props) {
  return (
    <div className='scrollbar'>
        <Header />
        {children}
        <Loading />
        <Footer />
    </div>
  )
}