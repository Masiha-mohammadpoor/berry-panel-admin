"use client";
import Navigation from "@/components/Navigation";
import "../globals.css";
import Sidebar from "@/components/Sidebar";
import { StyledEngineProvider } from "@mui/material";
import { Inter } from "next/font/google";
import useMenu from "@/hooks/useMenu";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const { openMenu } = useMenu();

  return (
    <html lang="en">
      <StyledEngineProvider injectFirst>
        <body
          className={`${inter.className} pt-2 fixed overflow-hidden`}
        >
          <main className={`w-screen grid ${openMenu ? "grid-cols-5" : "grid-cols-16"}`}>
          <aside className={`lg:col-span-1 h-screen relative w-60 lg:w-auto bg-light z-50 lg:z-auto -left-60 lg:left-0 lg:row-start-1`}>
            <Sidebar />
          </aside>
          <main className={`${openMenu ? "col-span-5 lg:col-span-4" : "lg:col-span-15 col-span-16"} mx-2 z-40 lg:z-auto row-start-1`}>
            <header className="w-full col-span-1 px-2 py-2 h-16 sticky top-0">
              <Navigation />
            </header>
            <section className="w-full mt-3 h-screen col-span-1 bg-body rounded-t-xl pb-28 overflow-y-scroll sticky top-16">
              <section className="w-full rounded-t-xl pt-5 px-4 lg:px-10 w-fll overflow-y-auto">
                {children}
              </section>
            </section>
          </main>
          </main>
        </body>
      </StyledEngineProvider>
    </html>
  );
}
