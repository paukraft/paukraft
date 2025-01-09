'use client'

import { map } from 'lodash'
import { AnimatePresence, motion } from 'motion/react'
import React, { useCallback, useEffect, useMemo, useState } from 'react'

interface Logo {
  name: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

interface LogoColumnProps {
  logos: Logo[]
  index: number
  currentTime: number
  cycleInterval: number
}

const LogoColumn: React.FC<LogoColumnProps> = React.memo(
  ({ logos, index, currentTime, cycleInterval }) => {
    const columnDelay = index * 200
    const adjustedTime =
      (currentTime + columnDelay) % (cycleInterval * logos.length)
    const currentIndex = Math.floor(adjustedTime / cycleInterval)
    const CurrentLogo = useMemo(
      () => logos[currentIndex].icon,
      [logos, currentIndex]
    )

    return (
      <motion.div
        className="relative h-14 w-24 overflow-hidden md:h-24 md:w-48"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.1,
          duration: 0.5,
          ease: 'easeOut',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${logos[currentIndex].name}-${currentIndex}`}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ y: '10%', opacity: 0, filter: 'blur(8px)' }}
            animate={{
              y: '0%',
              opacity: 1,
              filter: 'blur(0px)',
              transition: {
                type: 'spring',
                stiffness: 300,
                damping: 20,
                mass: 1,
                bounce: 0.2,
                duration: 0.5,
              },
            }}
            exit={{
              y: '-20%',
              opacity: 0,
              filter: 'blur(6px)',
              transition: {
                type: 'tween',
                ease: 'easeIn',
                duration: 0.3,
              },
            }}
          >
            <CurrentLogo className="h-20 w-20 max-h-[80%] max-w-[80%] object-contain md:h-32 md:w-32" />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    )
  }
)

LogoColumn.displayName = 'LogoColumn'

interface LogoCarouselProps {
  columnCount?: number
  logos: Logo[]
  speed?: number
}

export function LogoCarousel({
  columnCount = 2,
  logos,
  speed = 2000,
}: LogoCarouselProps) {
  const [logoSets, setLogoSets] = useState<Logo[][]>([])
  const [currentTime, setCurrentTime] = useState(0)

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100)
  }, [])

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100)
    return () => clearInterval(intervalId)
  }, [updateTime])

  useEffect(() => {
    // const distributedLogos = distributeLogos(logos, columnCount)
    const distributedLogos = map(Array(columnCount), (x, i) =>
      shiftArray(logos, (logos.length / columnCount) * i)
    )
    setLogoSets(distributedLogos)
  }, [logos, columnCount])

  return (
    <div className="flex space-x-4 justify-center w-min">
      {logoSets.map((logos, index) => (
        <LogoColumn
          key={index}
          logos={logos}
          index={index}
          currentTime={currentTime}
          cycleInterval={speed}
        />
      ))}
    </div>
  )
}

export { LogoColumn }

function shiftArray(arr: any[], shiftBy: number) {
  const length = arr.length
  const normalizedShiftBy = ((shiftBy % length) + length) % length // Normalize shiftBy to handle negative and large values
  return arr.slice(normalizedShiftBy).concat(arr.slice(0, normalizedShiftBy))
}
