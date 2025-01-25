import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogImage,
  MorphingDialogTrigger,
} from '@/components/ui/morphing-dialog'
import { cn } from '@/lib/utils'
import { XIcon } from 'lucide-react'
import { StaticImageData } from 'next/image'

export type ImageWithFullscreenProps = {
  src: string | StaticImageData
  alt: string
  className?: string
  priority?: boolean
  onOpenChange?: (isOpen: boolean) => void
  title?: string
}

export const ImageWithFullscreen = ({
  src,
  alt,
  className = 'max-w-xs',
  priority = false,
  onOpenChange,
  title,
}: ImageWithFullscreenProps) => {
  const isStaticImage = typeof src !== 'string'

  return (
    <MorphingDialog
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
      onOpenChange={onOpenChange}
    >
      <MorphingDialogTrigger>
        <div className={cn('cursor-zoom-in relative', className)}>
          <MorphingDialogImage
            src={src}
            alt={alt}
            useNextImage={isStaticImage}
            priority={priority}
          />
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative">
          <MorphingDialogImage
            src={src}
            alt={alt}
            className="h-auto w-full max-w-[90vw] rounded-[4px] object-cover max-h-[90vh]"
            useNextImage={isStaticImage}
            priority={priority}
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed right-6 top-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}
