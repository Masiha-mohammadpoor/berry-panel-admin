import { ThemeProvider } from "next-themes";
import "../globals.css";

export const metadata = {
  title: "home",
  description: "home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
