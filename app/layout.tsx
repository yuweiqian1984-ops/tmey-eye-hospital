import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "滕州启明眼科医院_滕州眼科_滕州眼病专家_滕州启明眼科医院",
    template: "%s | 滕州启明眼科医院",
  },
  description: "滕州启明眼科医院是按三级标准建设的专业眼科医院，开放床位80张。拥有爱尔康超乳、玻切，莱卡、蔡司手术显微镜，海德堡OCT、眼底造影，光太眼科A/B超，拓普康裂隙灯、眼压计、综合验光仪。",
  keywords: "滕州眼科医院,滕州眼科,滕州眼病专家,滕州启明眼科,近视手术,全飞秒,白内障,青光眼",
  authors: [{ name: "滕州启明眼科医院" }],
  creator: "滕州启明眼科医院",
  publisher: "滕州启明眼科医院",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://yuweiqian1984-ops.github.io/tmey-eye-hospital/",
    siteName: "滕州启明眼科医院",
    title: "滕州启明眼科医院 - 专业眼科医疗机构",
    description: "枣庄地区按三级标准建设的专业眼科医院，擅长近视手术、白内障、青光眼等眼科疾病诊疗",
    images: [
      {
        url: "https://yuweiqian1984-ops.github.io/tmey-eye-hospital/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "滕州启明眼科医院",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "滕州启明眼科医院",
    description: "专业眼科医疗机构，守护您的清晰视界",
    images: ["https://yuweiqian1984-ops.github.io/tmey-eye-hospital/og-image.jpg"],
  },
  alternates: {
    canonical: "https://yuweiqian1984-ops.github.io/tmey-eye-hospital/",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex flex-col bg-white text-gray-800">{children}</body>
    </html>
  );
}
