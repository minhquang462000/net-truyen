import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Net Truyen MQ",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}`),
  description: "Đọc truyện mọi nơi",
  icons: {
    icon: ["/images/net-truyen.ico?v=10"],
    apple: "/images/net-truyen.ico?v=10",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-[#ebebeb] dark:bg-[#141414]" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
