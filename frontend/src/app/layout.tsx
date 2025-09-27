import type { Metadata } from "next";
import { Geist, Geist_Mono, Exo_2, Quicksand } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "All IITs International Relations Conclave 2025 | IIT Jodhpur",
  description: "Join the All IITs International Relations Conclave 2025 at IIT Jodhpur, October 3-4. Foster global academic collaboration, interdisciplinary dialogue, and innovation-driven partnerships in higher education and research.",
  keywords: [
    "IIT Jodhpur",
    "International Relations Conclave",
    "Academic Collaboration",
    "Global Partnerships", 
    "Higher Education",
    "Research Conference",
    "IIT Conclave 2025",
    "Interdisciplinary Dialogue",
    "Innovation Partnerships",
    "Educational Networking"
  ],
  authors: [{ name: "IIT Jodhpur" }],
  creator: "Indian Institute of Technology Jodhpur",
  publisher: "IIT Jodhpur",
  robots: "index, follow",
  openGraph: {
    title: "All IITs International Relations Conclave 2025 | IIT Jodhpur",
    description: "Join the All IITs International Relations Conclave 2025 at IIT Jodhpur, October 3-4. Foster global academic collaboration, interdisciplinary dialogue, and innovation-driven partnerships.",
    url: "https://your-domain.com", // Replace with actual domain
    siteName: "IIT Jodhpur International Relations Conclave",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "All IITs International Relations Conclave 2025 | IIT Jodhpur",
    description: "Join the All IITs International Relations Conclave 2025 at IIT Jodhpur, October 3-4. Foster global academic collaboration and innovation-driven partnerships.",
    creator: "@iitjodhpur", // Replace with actual Twitter handle
  },
  alternates: {
    canonical: "https://your-domain.com", // Replace with actual domain
  },
  category: "Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${exo2.variable} ${quicksand.variable} antialiased font-quicksand`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
