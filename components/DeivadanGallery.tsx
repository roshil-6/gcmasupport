'use client'

import { useState } from 'react'

const IMAGES = [
  {
    src: '/gcma-projects/deivadan/deivadan-group.jpg',
    alt: 'GCMA team with the sisters and elderly mothers of Deivadan Old Age Home, Pala',
    caption: 'A helping hand from GCMA: Group photo with the sisters and elderly mothers'
  },
  {
    src: '/gcma-projects/deivadan/deivadan-unloading.jpg',
    alt: 'Unloading comfortable beds from the delivery truck',
    caption: 'Delivering the beds to the Deivadan Old Age Home facility'
  },
  {
    src: '/gcma-projects/deivadan/deivadan-mattress.jpg',
    alt: 'High-quality mattresses prepared for the mothers',
    caption: 'Specially chosen comfortable mattresses to improve the mothers\' rest'
  },
  {
    src: '/gcma-projects/deivadan/deivadan-hall.jpg',
    alt: 'Delivering beds to the main residential hall',
    caption: 'Bringing the new beds inside the residential quarters'
  },
  {
    src: '/gcma-projects/deivadan/deivadan-stacked.jpg',
    alt: 'Beds and pillows stacked ready for arrangement',
    caption: 'Arranging the beds and pillows for the rooms'
  }
]

export default function DeivadanGallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === IMAGES.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Main Display */}
      <div className="relative aspect-[16/10] md:aspect-[16/9] w-full rounded-xl overflow-hidden bg-black/90 border border-gold-metallic/35 shadow-2xl group">
        <img
          src={IMAGES[activeIndex].src}
          alt={IMAGES[activeIndex].alt}
          className="w-full h-full object-contain transition-all duration-500 ease-in-out"
        />
        
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-gold-metallic text-white hover:text-black p-2.5 rounded-full transition-all duration-350 opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-gold-metallic text-white hover:text-black p-2.5 rounded-full transition-all duration-350 opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Caption Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-4 pt-10 text-white">
          <p className="text-sm md:text-base font-medium drop-shadow-md text-gold-metallic">
            {IMAGES[activeIndex].caption}
          </p>
        </div>

        {/* Counter Overlay */}
        <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-sm border border-gold-metallic/30 text-white text-xs font-semibold px-2.5 py-1 rounded-md">
          {activeIndex + 1} / {IMAGES.length}
        </div>
      </div>

      {/* Thumbnail Bar */}
      <div className="flex gap-2.5 mt-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gold-metallic">
        {IMAGES.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`relative flex-shrink-0 w-20 h-14 md:w-24 md:h-16 rounded-md overflow-hidden transition-all duration-200 ${
              activeIndex === idx
                ? 'ring-2 ring-gold-metallic scale-[0.98]'
                : 'opacity-60 hover:opacity-100 hover:scale-[1.02]'
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
