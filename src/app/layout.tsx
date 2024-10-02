// import "./globals.css";
// import '../styles/globals.css';
// import '@/styles/globals.css';

// export const metadata = {
//   title: 'The Wisconsin Bucket List',
//   description: 'Explore Wisconsin like never before',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//       <link rel="icon" href="/tabIcon.png" />
//     </html>
//   );
// }


import "./globals.css";
import '../styles/globals.css';
import '@/styles/globals.css';
import Head from 'next/head'; // Import the Head component

export const metadata = {
  title: 'The Wisconsin Bucket List',
  description: 'Explore Wisconsin like never before',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* Essential Meta Tags */}
        <meta property="og:title" content="The Wisconsin Bucket List" />
        <meta
          property="og:description"
          content="Explore the best places to visit in Wisconsin."
        />
        <meta property="og:image" content="/book.png" /> {/* Path to your desired image */}
        <meta
          property="og:url"
          content="https://bookthewisconsinbucketlist.com"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* Other Meta Tags */}
        <title>The Wisconsin Bucket List</title>
        <link rel="icon" href="/tabIcon.png" /> {/* Favicon */}
      </Head>
      <body>{children}</body>
    </html>
  );
}
