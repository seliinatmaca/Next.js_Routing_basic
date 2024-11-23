import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: "Amazon - Alışveriş",
    template: "%s - Amazon",
  },
  description: "Amazon büyük bir eticaret sitesidir...",
};

// HOC
// Layout - Düzen bileşenidir
// Ekrana basılcak olan sayfayı / bileşni prop olarak alır ve html - body içerisnde return eder bu sayede farklı sayfalarda ortak olarak kullanılıcak bileşenler varsa bu noktada tanımlarız
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid items-center items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-3xl">
          {children}
        </div>
      </body>
    </html>
  );
}
