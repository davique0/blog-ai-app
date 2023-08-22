import React from 'react'
import SocialLinks from './SocialLinks'
import Subscribe from './Subscribe'
import Ad2 from 'public/assets/ad-2.png'
import Image from 'next/image'
import AboutProfile from "public/assets/about-profile.jpg"

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <section>
      <h4 className='bg-wh-900 py-2 px-5 text-wh-50 text-x font-bold text-center'>Subscribe and Follow</h4>
      <div className='m-5'>
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <div className='bg-wh-900 my-8 '>
        <Image
          className='hidden md:block my-8 w-full'
          alt="Ad-2"
          placeholder='blur'
          src={Ad2}
          width={500}
          height={1000}
        />

      </div>
      <h4 className='bg-wh-900 py-2 px-5 text-wh-50 text-xs font-bold text-center'>About the Blog</h4>
      <div className='flex justify-center my-3'>
        <Image
          alt="about profile"
          placeholder='blur'
          src={AboutProfile}
          style={{ width: "350px", height: "250px", objectFit: "cover" }}
        />

      </div>
      <h4 className='py-2 px-5 text-wh-500 font-bold text-center'>Mario Gutierrez</h4>
      <p className='text-wh-500 text-center text-sm'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </section>
  )
}

export default Sidebar