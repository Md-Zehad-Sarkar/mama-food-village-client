import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";
import CopyRightFooter from "@/components/Shared/Footer/CopyRightFooter";
import React from "react";
import { Box } from "@mui/material";

// import dynamic from "next/dynamic";

// const Navbar=dynamic(()=>import("@/components/Shared/Navbar/Navbar"),{ssr:false})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mama Food Village",
  description:
    "Founding by SMBC-LTD. Founder: Sarkar-Multipurpose-Business-Corporation",
};

export default function RootLayoutCommon({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Box sx={{ minHeight: "screen" }}>{children}</Box>
        <Footer />
        <CopyRightFooter />
      </body>
    </html>
  );
}
