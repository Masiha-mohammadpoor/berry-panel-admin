"use client"
import Navigation from "@/components/Navigation";
import "../globals.css";
import Sidebar from "@/components/Sidebar";
import { StyledEngineProvider } from "@mui/material/styles";
import { Inter } from "next/font/google";
import useMenu from "@/hooks/useMenu";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  const {openMenu} = useMenu();

  return (
    <html lang="en">
      <StyledEngineProvider injectFirst>
        <body
          className={`${inter.className} transition overflow-hidden grid ${openMenu ? "grid-cols-5" : "grid-cols-16"} pt-2`}
        >
          <aside className={` col-span-1 bg-light sticky top-0 bottom-0 h-screen`}>
            <Sidebar />
          </aside>
          <main className={`transition-all duration-300 ${openMenu ? "col-span-4" : "col-span-15"} grid grid-cols-1 overflow-hidden mx-2`}>
            <header className="col-span-1 px-2 py-2 sticky top-0 h-16">
              <Navigation />
            </header>
            <section className="w-full mt-3 h-screen col-span-1 bg-body rounded-t-xl pb-28 overflow-y-scroll sticky top-16">
              <section className="rounded-t-xl pt-5 px-10 w-fll overflow-y-auto">
                {children}
              </section>
            </section>
          </main>
        </body>
      </StyledEngineProvider>
    </html>
  );
}
