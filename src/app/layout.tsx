import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Abhishek Thummar | Enterprise Systems & CRM Automation Specialist",
  description:
    "IT Assistant Manager specializing in CRM Automation, ERP Customizations, API Integrations, and Analytics. Building practical enterprise software solutions for operational efficiency.",
  keywords: [
    "Abhishek Thummar",
    "CRM Automation",
    "ERP Developer",
    "API Integrations",
    "Odoo",
    "Zoho CRM",
    "Deluge Scripting",
    "Systems Engineer",
    "IT Manager",
    "Mumbai",
  ],
  authors: [{ name: "Abhishek Thummar" }],
  creator: "Abhishek Thummar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhishekthummar.com",
    title: "Abhishek Thummar | Enterprise Systems & CRM Automation Specialist",
    description:
      "IT Assistant Manager specializing in CRM Automation, ERP Customizations, API Integrations, and Analytics. Building practical enterprise software solutions for operational efficiency.",
    siteName: "Abhishek Thummar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Thummar | Enterprise Systems & CRM Automation Specialist",
    description:
      "IT Assistant Manager specializing in CRM Automation, ERP Customizations, API Integrations, and Analytics. Building practical enterprise software solutions for operational efficiency.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${mulish.variable} antialiased selection:bg-primary/20 selection:text-primary bg-background text-foreground`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
