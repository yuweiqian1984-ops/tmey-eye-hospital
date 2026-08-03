import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-noto-sans-sc",
});

export const metadata: Metadata = {
  title: "滕州启明眼科医院 - 专业眼科医疗机构",
  description: "滕州启明眼科医院，专注于屈光手术、综合眼病、眼视光等眼科医疗服务。全飞秒激光手术、ICL晶体植入、白内障、青光眼等专业眼科诊疗。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${notoSansSC.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
