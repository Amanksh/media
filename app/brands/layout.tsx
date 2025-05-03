import type React from "react"

export const metadata = {
  title: "Brands - Solv Media",
  description: "Leading brands that trust Solv Media for their influencer marketing campaigns.",
}

export default function BrandsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-black">{children}</div>
}
