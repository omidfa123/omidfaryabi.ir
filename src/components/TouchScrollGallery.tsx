'use client'

import { useRef, useEffect, useState } from 'react'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

interface TouchScrollGalleryProps {
  images: StaticImageData[]
  projectLinks: string[]
  projectNames: string[]
  rotations: string[]
}

export function TouchScrollGallery({
  images,
  projectLinks,
  projectNames,
  rotations,
}: TouchScrollGalleryProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Handle touch start
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
    if (scrollContainerRef.current) {
      setScrollLeft(scrollContainerRef.current.scrollLeft)
    }
  }

  // Handle touch move
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return
    
    e.preventDefault()
    const x = e.touches[0].clientX
    const walk = (startX - x) * 1.5 // Adjust scroll sensitivity
    scrollContainerRef.current.scrollLeft = scrollLeft + walk
  }

  // Handle touch end
  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  // Handle mouse events for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX)
    if (scrollContainerRef.current) {
      setScrollLeft(scrollContainerRef.current.scrollLeft)
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return
    
    e.preventDefault()
    const x = e.pageX
    const walk = (startX - x) * 1.5
    scrollContainerRef.current.scrollLeft = scrollLeft + walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  // Update current index based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return
      
      const container = scrollContainerRef.current
      const itemWidth = container.scrollWidth / images.length
      const index = Math.round(container.scrollLeft / itemWidth)
      setCurrentIndex(Math.max(0, Math.min(index, images.length - 1)))
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true })
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [images.length])

  // Scroll to specific index
  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return
    
    const container = scrollContainerRef.current
    const itemWidth = container.scrollWidth / images.length
    container.scrollTo({
      left: itemWidth * index,
      behavior: 'smooth'
    })
  }

  return (
    <div className="mt-16 sm:mt-20">
      {/* Mobile/Touch optimized gallery */}
      <div className="sm:hidden">
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {images.map((image, imageIndex) => (
            <Link
              key={image.src}
              href={projectLinks[imageIndex]}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                'group relative aspect-[9/10] w-72 flex-none snap-center overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 transition-all duration-300 cursor-pointer',
                rotations[imageIndex % rotations.length],
                !isDragging && 'hover:scale-105 hover:shadow-xl'
              )}
              title={projectNames[imageIndex]}
              onClick={(e) => {
                // Prevent navigation if we're in the middle of dragging
                if (isDragging) {
                  e.preventDefault()
                }
              }}
            >
              <Image
                src={image}
                alt={projectNames[imageIndex]}
                sizes="18rem"
                className="absolute inset-0 h-full w-full object-cover transition-all duration-300 group-hover:brightness-75 group-hover:contrast-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/40" />
              
              {/* Hover overlay with text */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="text-center">
                  <div className="bg-white/90 dark:bg-zinc-800/90 px-4 py-2 rounded-lg shadow-lg backdrop-blur-sm border border-white/20 dark:border-zinc-700/50">
                    <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Visit Website</p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Click to open</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Dot indicators for mobile */}
        <div className="flex justify-center mt-6 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={clsx(
                'w-2 h-2 rounded-full transition-all duration-300',
                index === currentIndex
                  ? 'bg-teal-500 dark:bg-teal-400 w-8'
                  : 'bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-500'
              )}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop version (existing design) */}
      <div className="hidden sm:block">
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          {images.map((image, imageIndex) => (
            <Link
              key={image.src}
              href={projectLinks[imageIndex]}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                'group relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer',
                rotations[imageIndex % rotations.length],
              )}
              title={projectNames[imageIndex]}
            >
              <Image
                src={image}
                alt={projectNames[imageIndex]}
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover transition-all duration-300 group-hover:brightness-75 group-hover:contrast-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/40" />
              
              {/* Hover overlay with text */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="text-center">
                  <div className="bg-white/90 dark:bg-zinc-800/90 px-4 py-2 rounded-lg shadow-lg backdrop-blur-sm border border-white/20 dark:border-zinc-700/50">
                    <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Visit Website</p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Click to open</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
