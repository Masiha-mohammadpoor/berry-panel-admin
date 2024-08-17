import "../globals.css";


export const metadata = {
  title: "home",
  description: "home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
