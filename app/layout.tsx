import type React from "react";
import "@/app/globals.css";

import { Navbar } from "@/components/ui/navbar";
import { Flag } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export const metadata = {
  title: "Buzznova Media - Influencer Marketing Agency in India",
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
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
