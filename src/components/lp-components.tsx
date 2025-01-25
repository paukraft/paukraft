import { PropsWithChildren } from 'react'

export const LPSectionTitle = ({ children }: PropsWithChildren) => {
  return <h2 className="text-4xl md:text-6xl font-black">{children}</h2>
}
