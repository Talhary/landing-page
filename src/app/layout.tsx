import type { Metadata } from "next";
//import { formular } from "./fonts";
import "./globals.scss";

import './global.css'
export const metadata: Metadata = {
  title: "Meet Black",
  description: "a landing page",
};
import { ThemeProvider } from "./components/theme-provider";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      <body className="">{children}</body>
      </ThemeProvider>
    </html>
  );
}
