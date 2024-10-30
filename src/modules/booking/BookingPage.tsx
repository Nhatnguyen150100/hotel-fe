import { ArrowLeftOutlined } from '@ant-design/icons'
import * as React from 'react'

export default function BookingPage() {
  return (
    <div className='container bg-transparent p-10'>
      <div className='flex flex-row justify-start items-center'>
        <span className='flex text-blue-800 flex-row justify-start items-center transform-hover hover:text-yellow-600 hover:cursor-pointer space-x-3'>
          <ArrowLeftOutlined />
          <span className='text-lg'>Quay lại</span>
        </span>
      </div>
      <div className='rounded-2xl bg-white p-5'>

      </div>
    </div>
  )
}