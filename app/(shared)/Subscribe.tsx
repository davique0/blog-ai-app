import React from 'react'

type Props = {}

const Subscribe = () => {
  return (
    <div className='text-center bg-wh-10 px-5 py-10'>
      <h4 className='font-semibold text-base'>Subscribe to our Newsletter</h4>
      <p className='text-wh-50 my-3 w-5/6 mx-auto'>
        Enter email address to get the latest top news and deals
      </p>
      <input type="text" className='text-center w-5/6 min-w-[100px] px-5 py-2 border-2' placeholder='Enter Eamil Address' />
      <button className='bg-accent-red text-wh-10 font-semibold w-5/6 min-w-[100px] py-2 px-5 mt-3'>
        SUBSCRIBE
      </button>
    </div>
  )
}

export default Subscribe