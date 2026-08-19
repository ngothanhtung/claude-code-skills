import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Zilla_Slab } from "next/font/google";
import "./globals.css";

const zillaSlab = Zilla_Slab({
  variable: "--font-zilla-slab",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sổ Giao Việc — Quản lý & theo dõi công việc",
  description: "Ứng dụng quản lý và theo dõi công việc",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${zillaSlab.variable} ${inter.variable} ${jetBrainsMono.variable} h-full`}
    >
      <body className="font-body text-ink min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
