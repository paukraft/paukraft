import { PropsWithChildren } from 'react'

export const LPSectionTitle = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-3xl md:text-5xl font-bold">{children}</h2>
      <div className="h-1 w-16 bg-primary rounded-full"></div>
    </div>
  )
}
