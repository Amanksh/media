"use client"

import { useRef } from "react"
import { useScroll, useTransform, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string
    link: string
    thumbnail: string
  }[]
}) => {
  const firstRow = products.slice(0, 5)
  const secondRow = products.slice(5, 10)
  const thirdRow = products.slice(10, 15)

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const translateX = useTransform(scrollYProgress, [0, 1], [0, -1000])
  const translateXReverse = useTransform(scrollYProgress, [0, 1], [0, 1000])
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 500])
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 30])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2])

  return (
    <div
      ref={ref}
      className="h-[300vh] bg-white py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          opacity,
          translateY,
        }}
        className="flex flex-row-reverse space-x-reverse space-x-20 mb-20"
      >
        {firstRow.map((product) => (
          <ProductCard product={product} translate={translateX} key={product.title} />
        ))}
      </motion.div>
      <motion.div
        style={{
          rotateX,
          opacity,
          translateY,
        }}
        className="flex flex-row mb-20 space-x-20"
      >
        {secondRow.map((product) => (
          <ProductCard product={product} translate={translateXReverse} key={product.title} />
        ))}
      </motion.div>
      <motion.div
        style={{
          rotateX,
          opacity,
          translateY,
        }}
        className="flex flex-row-reverse space-x-reverse space-x-20"
      >
        {thirdRow.map((product) => (
          <ProductCard product={product} translate={translateX} key={product.title} />
        ))}
      </motion.div>
    </div>
  )
}

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-4xl md:text-7xl font-bold text-zinc-900">
        Best <span className="text-red-600">Influencer Marketing</span> <br /> Agency in India
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-zinc-600">
        Solv Media is the best influencer marketing agency in India which provides the top influencer marketing platform
        to help brands & visionary marketers leverage social media influencers.
      </p>
    </div>
  )
}

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string
    link: string
    thumbnail: string
  }
  translate: any
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link href={product.link} className="block group-hover/product:shadow-2xl">
        <Image
          src={product.thumbnail || "/placeholder.svg"}
          height="600"
          width="800"
          className="object-cover object-left-top absolute h-full w-full inset-0 rounded-xl"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black rounded-xl transition duration-200"></div>
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <h2 className="opacity-0 group-hover/product:opacity-100 text-white text-2xl font-bold transition duration-200">
          {product.title}
        </h2>
      </div>
    </motion.div>
  )
}
