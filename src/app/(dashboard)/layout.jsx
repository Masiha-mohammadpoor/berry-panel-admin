import Navigation from "@/components/Navigation";
import "../globals.css";
import Sidebar from "@/components/Sidebar";
import { StyledEngineProvider } from "@mui/material/styles";
import { Inter } from "next/font/google";

export const metadata = {
  title: "dashborad",
  description: "dashboard",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StyledEngineProvider injectFirst>
        <body
          className={`${inter.className} overflow-hidden grid grid-cols-5 pt-2`}
        >
          <aside className="bg-light col-span-1 sticky top-0 bottom-0 h-screen">
            <Sidebar />
          </aside>
          <main className="col-span-4 grid grid-cols-1 overflow-hidden mx-2">
            <header className="col-span-1 px-2 py-2 sticky top-0 h-16">
              <Navigation />
            </header>
            <section className="w-full mt-3 h-screen col-span-1 bg-body rounded-t-xl pb-28 overflow-y-scroll sticky top-16">
              <section className="rounded-t-xl pt-5 px-10 w-fll">
                {children}
              </section>
            </section>
          </main>
        </body>
      </StyledEngineProvider>
    </html>
  );
}
