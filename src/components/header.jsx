import { ArrowLeft } from 'lucide-react/dist/lucide-react'
import React from 'react'

export default function Header() {
  return (
    <div className='flex'>
        <ArrowLeft className='size-6' />
        <h2 className='text-lg font-bold mx-auto'>Выберите услугу</h2>
    </div>
  )
}
