import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "~/hooks/ThemeSetter";
import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <ClerkProvider>
        <ThemeProvider>
          <body className="bg-background text-text">
            <Header />
            {children}
            </body>
        </ThemeProvider>
      </ClerkProvider>
    </html>
  );
}
