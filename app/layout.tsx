import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "滕州启明眼科医院_滕州眼科_滕州眼病专家_滕州启明眼科医院",
  description: "滕州启明眼科医院是按三级标准建设的专业眼科医院，开放床位80张。拥有爱尔康超乳、玻切，莱卡、蔡司手术显微镜，海德堡OCT、眼底造影，光太眼科A/B超，拓普康裂隙灯、眼压计、综合验光仪。",
  keywords: "滕州眼科医院,滕州眼科,滕州眼病专家,滕州启明眼科,近视手术,全飞秒,白内障,青光眼",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex flex-col bg-white text-gray-800">{children}</body>
    </html>
  );
}
