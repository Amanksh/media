import type React from "react";
import "@/app/globals.css";

import { Navbar } from "@/components/ui/navbar";
import { Flag } from "lucide-react";

export const metadata = {
  title: "Buzznova Media - Best Influencer Marketing Agency in India",
  description:
    "Buzznova Media is the best influencer marketing agency in India which provides the top influencer marketing platform to help brands leverage social media influencers.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
