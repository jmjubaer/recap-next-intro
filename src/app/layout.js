import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shere/Navbar";

const roboto = Roboto({
    weight: ["400", "500"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    title: "Recap nextjs core concepts",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={roboto.className}>{children}</body>
        </html>
    );
}
