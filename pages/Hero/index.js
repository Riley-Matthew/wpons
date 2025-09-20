import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
 <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <Image src="/herta-kurukuru.gif" width={250} height={250}></Image>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to my Website</h1>
      <p class="mb-8 leading-relaxed">   </p>
      <div class="flex justify-center">
        
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
