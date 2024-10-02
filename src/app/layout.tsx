import "./globals.css";
import '../styles/globals.css';
import '@/styles/globals.css';

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
      <body>{children}</body>
      <link rel="icon" href="/book.png" />
    </html>
  );
}
