import * as React from 'react'
import SearchRoom from '../landing-page/SearchRoom'

export default function ListRoom() {
  return (
    <div className='flex flex-col justify-start items-center py-5 space-y-5 w-full'>
      <SearchRoom />
      <div className='flex flex-row justify-between items-start w-full max-w-[1120px]'>
        <div className='flex flex-col px-3 py-5 justify-start items-start bg-white rounded-2xl'>
          <h1>Bộ lọc</h1>
        </div>
      </div>
    </div>
  )
}