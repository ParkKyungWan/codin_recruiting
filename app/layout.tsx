import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "코딘 리쿠르팅",
  description: "인천대학교 정보기술대학 공식 SNS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`} >
        {children}
      </body>
    </html>
  );
}
