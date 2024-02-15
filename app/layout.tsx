import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { MotionWrapper } from "@/components/Animations";
import { API_ORIGIN, BASE_URL } from "@/config";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Ignite Web",
    template: `%s | Ignite Web`,
  },
  description: "Building stellar websites for early startups",
  openGraph: {
    images: {
      url: "/images/igniteweb-og.webp",
      width: 1200,
      height: 630,
      alt: "igniteweb",
    },
    title: {
      default: "Ignite Web",
      template: `%s | Ignite Web`,
    },
    description: "Building stellar websites for early startups",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href={`${API_ORIGIN}/_next/static/css/f4b2ee2f39e6b871.css`} // if api is in production
          // href={`${API_ORIGIN}/_next/static/css/488ef1a06c0ef557.css`} // if api is in npm start
          // href={`${API_ORIGIN}/styles/blog.css`} // if api is in development
        />
      </head>

      <body
        className={`text-dark-blue text-sm lg:text-base ${poppins.className}`}
      >
        <MotionWrapper>
          <Navbar />

          <main className="overflow-hidden">{children}</main>

          <Footer />

          <Toaster />
        </MotionWrapper>

        {/* <Script
          src={`${API_ORIGIN}/api/65c8877f09417cb3d8b7e600/set-device-id`}
        /> */}

        {/* for non nextjs websites */}
        {/* <script
          src={`${API_ORIGIN}/api/65c8877f09417cb3d8b7e600/set-device-id`}
          async
        /> */}
      </body>
    </html>
  );
}
