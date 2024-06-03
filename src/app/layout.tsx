import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Providers from "@/lib/Providers/Providers";

import React from "react";

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
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </Providers>
      </body>
    </html>
  );
}
