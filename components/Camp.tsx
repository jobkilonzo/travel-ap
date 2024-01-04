import { PEOPLE_URL } from '@/constants'
import { url } from 'inspector'
import Image from 'next/image'
import React from 'react'

interface CampProps{
  bgImg: string,
  title: string
  subtitle:string
  peopleJoined:string
}
const CampSite = ({bgImg, title, subtitle, peopleJoined} : CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${bgImg} bg-cover bg-no-repeat lg:rounded-5xl 2xl:rounded-5xl`}>
      <div className='flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-18'>
        <div className='flexCenter gap-4'>
          <div className='rounded-full bg-green-50 p-4'>
            <Image
            src='/folded-map.svg'
            alt=''
            height={28}
            width={28}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <h4 className='bold-18 text-white'>{title}</h4>
            <p className='regular-14 text-white'>{subtitle}</p>
          </div>
        </div>
        <div className='flexCenyter gap-6'>
          <span className='flex -space-x-4 overflow-hidden'>
            {PEOPLE_URL.map((url) =>(
              <Image
              className='inline-block h-10 w-10 rounded-full'
              src={url}
              key={url}
              alt='person'
              width={52}
              height={52}
              />
            ))}
          </span>
          <p className='bold-16 md:bold-20 text-white'>{peopleJoined}</p>
        </div>
      </div>
    </div>
  )
}
const Camp = () => {
  return (
    <section className=' 2xl:max-container relative flex flex-col py-10 lg:mb-20 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px]'>
        <CampSite
        bgImg="bg-bg-img-1"
        title="Putuc Truno Camp"
        subtitle="Prigen, Pasurun" 
        peopleJoined="50+ Joined"/>
        <CampSite
        bgImg="bg-bg-img-2"
        title="Mountain View Camp"
        subtitle="Somewhere in kenya" 
        peopleJoined="50+ Joined"/>
      </div>
      <div className='flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6'>
        <div className='bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] 
        xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-xl' >
          <h2 className='regular-24 md:regular-32 2xl:regular-64 capitalize text-white
          '>
            <strong>Feeling Lost</strong> And Not Knowing The way?
          </h2>
          <p className='regular-14 xl:regular-16 mt-5 text-white'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore iure facilis veritatis nihil veniam laboriosam suscipit aliquid porro enim, dignissimos rem minima molestiae ipsam! Labore distinctio omnis molestias. Perspiciatis, doloribus.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Camp