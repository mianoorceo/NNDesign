import type { Metadata } from "next";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "راهنمای مطالعه Neural Network Design",
  description:
    "خلاصه و ترجمه‌ی فارسیِ کامل کتاب Neural Network Design — همه‌ی ۲۷ فصل، از مدل نورون تا پنج مطالعه‌ی موردی واقعی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
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
