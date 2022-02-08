import React from 'react'

const MiniProfile = () => {
  return (
    <div className='flex items-center mt-14 ml-10'>
      <img
        src="https://i.imgur.com/8kQqO2y.png"
        alt=""
        className="rounded-full border p-[2px] h-16 w-16"
      />

      <div className='flex-1 mx-4'>
          <h2 className='font-bold'>Bogdan Daniel</h2>
          <h3 className='text-sm text-gray-400'>React dev</h3>
      </div>

      <button className='text-blue-400 text-sm font-semibold'>Sing out</button>
    </div>
  )
}

export default MiniProfile
