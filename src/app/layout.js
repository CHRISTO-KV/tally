import "./globals.css";

export const metadata = {
  title: "TallyPro Solutions | TallyPrime Sales, Support, Cloud & Customization",
  description:
    "TallyPrime implementation, customization, cloud access, training, GST support, analytics dashboards, and AMC services for growing businesses.",
  keywords: [
    "TallyPrime",
    "TallyPrime support",
    "Tally customization",
    "Tally on cloud",
    "TallyPrime Server",
    "GST accounting software",
    "Tally partner India",
  ],
  authors: [{ name: "TallyPro Solutions" }],
  openGraph: {
    title: "TallyPro Solutions | TallyPrime Sales, Support, Cloud & Customization",
    description:
      "Professional TallyPrime implementation, custom reports, GST compliance support, cloud access, and AMC for growing businesses.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "TallyPro Solutions",
    description:
      "TallyPrime sales, support, cloud, customization, analytics, and AMC services.",
  },
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
