import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";

export const metadata = {
  title: "Saumya Kulathunga | Fullstack Developer",
  description: "Fullstack developer portfolio showcasing projects and services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
