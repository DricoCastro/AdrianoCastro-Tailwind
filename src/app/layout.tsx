import { DefaultFooter } from "./components/DefaultFooter";
import { DefaultHeader } from "./components/DefaultHeader";
import "./globals.css";

export const metadata = {
  title: "Adriano Castro",
  description: "Developed by Adriano Castro",
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
      </body>
    </html>
  );
}
