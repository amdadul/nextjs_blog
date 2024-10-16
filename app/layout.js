import localFont from "next/font/local";
import "./globals.css";
import Navigation from "./components/Navigation";


export const metadata = {
  title: "Next Blog App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation></Navigation>
        {children}
      </body>
    </html>
  );
}
