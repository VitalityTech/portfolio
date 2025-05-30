import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";
import "./globals.css";

const outfit = OutfitFont({
  subsets: ["latin"], 
  weight: ['400', '500', '600', '700'] // виправлено weigh -> weight
});

const ovo = OvoFont({
  subsets: ["latin"], 
  weight: ['400'] // виправлено weigh -> weight
});

export const metadata = {
  title: "Vitaliy Hladchenko",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth"> 
      <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-dark-theme dark:text-white`}>
        {children}
      </body>
    </html>
  );
}