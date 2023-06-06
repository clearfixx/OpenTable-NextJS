import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export type TMetadata = {
  title: string;
  description: string;
};
export const metadata: TMetadata = {
  title: "OpenTable Next.JS",
  description: "OpenTable Next.JS",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-gray-100 min-h-screen w-full">
          <main className="max-w-screen-2xl m-auto bg-white">
            <Navbar />
            {children}
          </main>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
