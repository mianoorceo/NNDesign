import type { Metadata } from "next";
import { Vazirmatn, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Sidebar from "@/components/Sidebar";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "راهنمای مطالعه Neural Network Design",
  description:
    "خلاصه و ترجمه‌ی فارسیِ کامل کتاب Neural Network Design — همه‌ی ۲۷ فصل، از مدل نورون تا پنج مطالعه‌ی موردی واقعی",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6F3EA" },
    { media: "(prefers-color-scheme: dark)", color: "#15161B" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Topbar />
        <div className="max-w-310 mx-auto px-6 flex gap-10">
          <Sidebar />
          <main className="min-w-0 max-w-195 flex-1 pb-32">{children}</main>
        </div>
      </body>
    </html>
  );
}
