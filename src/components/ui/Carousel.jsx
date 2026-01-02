import { useState } from 'react';
import { motion } from 'motion/react';

export const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const handlePrevious = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleSlideClick = (index) => {
    setCurrent(index);
  };

  return (
    <div className="w-full h-full relative overflow-hidden py-20">
      <div className="flex items-center justify-center w-full h-full">
        <div className="relative w-full h-[60vh] max-h-[500px] flex items-center justify-center">
          {slides.map((slide, index) => (
            <Slide
              key={index}
              slide={slide}
              index={index}
              current={current}
              totalSlides={slides.length}
              handleSlideClick={handleSlideClick}
            />
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 z-50">
        <CarouselControl
          type="previous"
          title="Previous slide"
          handleClick={handlePrevious}
        />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 z-50">
        <CarouselControl
          type="next"
          title="Next slide"
          handleClick={handleNext}
        />
      </div>
    </div>
  );
};

const Slide = ({ slide, index, current, totalSlides, handleSlideClick }) => {
  let offset = index - current;
  
  // Normalize offset to handle wrap-around
  if (offset > totalSlides / 2) offset -= totalSlides;
  if (offset < -totalSlides / 2) offset += totalSlides;

  const isActive = index === current;

  // Calculate position and scale based on offset
  const getStyles = () => {
    if (offset === 0) {
      return {
        zIndex: 30,
        scale: 1,
        x: '0%',
        opacity: 1,
        rotateY: 0,
      };
    } else if (offset === 1) {
      return {
        zIndex: 20,
        scale: 0.85,
        x: '50%',
        opacity: 0.6,
        rotateY: -25,
      };
    } else if (offset === -1) {
      return {
        zIndex: 20,
        scale: 0.85,
        x: '-50%',
        opacity: 0.6,
        rotateY: 25,
      };
    } else {
      return {
        zIndex: 0,
        scale: 0.7,
        x: offset > 0 ? '100%' : '-100%',
        opacity: 0,
        rotateY: offset > 0 ? -45 : 45,
      };
    }
  };

  const styles = getStyles();

  return (
    <motion.div
      className="absolute w-[70%] md:w-[40%] cursor-pointer"
      style={{
        zIndex: styles.zIndex,
        perspective: '1000px',
      }}
      animate={{
        scale: styles.scale,
        x: styles.x,
        opacity: styles.opacity,
        rotateY: styles.rotateY,
      }}
      transition={{
        duration: 0.7,
        ease: [0.32, 0.72, 0, 1],
      }}
      onClick={() => handleSlideClick(index)}
    >
      <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] bg-white dark:bg-neutral-900">
        {/* Image */}
        <div className="relative h-[300px] md:h-[400px] overflow-hidden">
          <img
            src={slide.src}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Content - only show on active slide */}
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {slide.title}
              </h3>
              
              {slide.description && (
                <p className="text-sm md:text-base text-neutral-200 mb-4">
                  {slide.description}
                </p>
              )}

              {slide.tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {slide.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {slide.button && (
                <button className="px-6 py-2.5 bg-white text-black rounded-lg font-medium hover:bg-neutral-100 transition-colors">
                  {slide.button}
                </button>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const CarouselControl = ({ type, title, handleClick }) => {
  const Icon = type === 'previous' ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );

  return (
    <button
      onClick={handleClick}
      aria-label={title}
      className="p-3 rounded-full bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm text-neutral-900 dark:text-white hover:bg-white dark:hover:bg-neutral-800 transition-all hover:scale-110 shadow-lg"
    >
      {Icon}
    </button>
  );
};
