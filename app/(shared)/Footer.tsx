import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='bg-wh-900 text-wh-50 py-10 px-10'>
      <div className='sm:flex justify-between mx-auto gap-16'>
        {/* 1st Column */}
        <div className='mt-16 basis-1/2 sm:mt-0'>
          <h4 className='font-bold'>BLOG OF THE FUTURE</h4>
          <p className='my-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, placeat quidem! Corrupti earum minima libero aliquid facere debitis dignissimos sapiente.</p>
          <p>
            © Blog of the Future All Rights Reserved.
          </p>
        </div>
        {/* 2nd Column */}
        <div className='mt-16 basis-1/2 sm:mt-0'>
          <h4 className='font-bold'>Links</h4>
          <p className='my-5'>Ducimus quod, repellat nulla fugiat ipsum</p>
          <p className='my-5'>Acere debitis dignissimos sapient</p>
          <p>
            Libero aliquid facere debitis
          </p>
        </div>
        {/* 3rd Columnd */}
        <div className='mt-16 basis-1/2 sm:mt-0'>
          <h4 className='font-bold'>Contact Us</h4>
          <p className='my-5'>Debitis dignissimos sapiente voluptas.</p>
          <p>
            (555) 555-5555
          </p>
        </div>
      </div>

    </footer>
  )
}

export default Footer