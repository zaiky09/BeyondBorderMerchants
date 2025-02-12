import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Chatbot from "../../components/Chatbot/Chatbot";

export const metadata: Metadata = {
  title: "Beyond Borders Ltd",
  description: "Your cargo, our commitment.",
  icons: {
    icon: "/favicon2.png", // Path to the favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className="overflow-x-hidden">
      <head>
        {/* Manually add the favicon link */}
        <link rel="icon" href="/favicon2.png" />
      </head>
      <body>
        <div className="flexCenter flex-col">
          <Navbar />
          <main className="relative overflow-x-hidden w-[100vw] lg:w-full">
            {children}
          </main>
          <Chatbot/>
          <Footer />
        </div>
      </body>
    </html>
  );
}