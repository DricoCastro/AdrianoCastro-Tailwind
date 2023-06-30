import { DefaultFooter } from "./components/DefaultFooter";
import { DefaultHeader } from "./components/DefaultHeader";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Adriano Castro",
  description: "Profile site developed by Adriano Castro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DefaultHeader />
        {children}
        <DefaultFooter />
        <Analytics />
      </body>
    </html>
  );
}
