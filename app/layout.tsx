import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Emmanuella Ubokabasi | My Linktree",
  description: "Web Dev | Mental Enthusiast | Drummer ",
  ogImage: "../public/my-picture.jpg", // Replace with the actual path to your Open Graph image
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
      </Head>
      <body className="bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600">
        {children}
      </body>
    </html>
  );
}
