import type { Metadata } from "next";
import { Geist, Geist_Mono, Ubuntu, Nunito, Rubik, Noto_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/ThemeProvider";

const notoSans = Noto_Sans({
  variable: '--font-sans',
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800", "900"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Classroom AI",
  description: "AI based Learning Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={notoSans.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ubuntu.variable} ${nunito.variable} ${rubik.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
