import React from 'react'
import FormWidget from './FormWidget'

const Hero = () => {
  return (
    <>
     <div className="relative w-full black-white">
    <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
      <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
        <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
          <div className="rounded-full bg-white p-1 px-2">
            <p className="text-sm text-black font-medium">Web Designing &</p>
          </div>
          <p className="text-sm text-black font-medium">Development →</p>
        </div>
        <h1 className="mt-8 text-3xl font-bold tracking-tight text-yellow-500 md:text-4xl lg:text-6xl">
          New Nepal | Digital Nepal |
        </h1>
        <p className="mt-8 text-lg text-white-500">
        At Graphics Mover, we believe that social media is the easiest & fastest way to promote your business across the world. That’s why we spend an inordinate amount of brainpower to develop a perfect marketing strategy to market your products and services
        </p>
        <form action="" className="mt-8 flex items-start space-x-2">
          <div>
            <input
              className="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Enter your email"
              id="email"
            />
            <p className="mt-2 text-sm text-gray-500">We care about your privacy</p>
          </div>
          <div>
            <button
            
              type="button"
              className="rounded-md  bg-yellow-500 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
      <div className="flex w-full   relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
    <FormWidget/>
      </div>
    </div>
  </div>
    </>
  )
}

export default Hero
