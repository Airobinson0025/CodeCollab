import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/providers/theme-provider";
import SmoothScroll from "./components/providers/smooth-scroll";
import Navbar from "./components/global/navbar";




const font = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Code Collab",
  description: "Code Collab is a platform for developers to collaborate on projects.",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className={font.className}>
        
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange >
          <SmoothScroll>
            <Navbar />
           {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
    
  );
}
