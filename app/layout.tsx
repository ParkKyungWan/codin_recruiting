import type { Metadata } from "next";
import "./globals.css";
import InteractiveCursur from "@/components/common/interactiveCursur";

export const metadata: Metadata = {
  title: "코딘 리쿠르팅",
  description: "인천대학교 정보기술대학 공식 SNS",
  icons:{
    icon: "/icons/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="w-full h-full overflow-visible">
      <body className={`antialiased w-full h-full overflow-visible`} >
        {children}
        <InteractiveCursur/>
      </body>
    </html>
  );
}
