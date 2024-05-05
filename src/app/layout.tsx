import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Providers from "@/lib/Providers/Providers";
// import dynamic from "next/dynamic";

// const Navbar=dynamic(()=>import("@/components/Shared/Navbar/Navbar"),{ssr:false})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mama Food Village",
  description:
    "Founding by SMBC-LTD. Founder: Sarkar-Multipurpose-Business-Corporation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AppRouterCacheProvider>
            <Navbar />
            {children}
          </AppRouterCacheProvider>
        </Providers>
      </body>
    </html>
  );
}
