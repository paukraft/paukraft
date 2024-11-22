import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full flex-1 flex flex-col justify-end">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 py-6 px-6">
        <p className="text-xs text-muted-foreground">by Pau Kraft</p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <Link href="https://twitter.com/paukraft" target="_blank">
            <p className="text-sm text-muted-foreground hover:underline">
              Twitter / X
            </p>
          </Link>
          <Link href="https://bsky.app/profile/paukraft.com" target="_blank">
            <p className="text-sm text-muted-foreground hover:underline">
              Bluesky
            </p>
          </Link>
        </div>
      </div>
    </footer>
  )
}
