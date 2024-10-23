import * as React from 'react'
import TheHeader from './TheHeader'
import { Outlet } from 'react-router-dom'
import TheFooter from './TheFooter'

export default function TheLayout() {

  return (
    <div className='h-full w-full flex flex-col justify-start items-center overflow-y-auto bg-[#f4f4f5]'>
      <TheHeader />
      <Outlet />
      <TheFooter />
    </div>
  )
}