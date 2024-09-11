"use client";
import Navigation from "@/components/Navigation";
import "../globals.css";
import Sidebar from "@/components/Sidebar";
import { createTheme, StyledEngineProvider } from "@mui/material";
import { Inter } from "next/font/google";
import useMenu from "@/hooks/useMenu";
import useMenuMobile from "@/hooks/useMenuMobile";
import { Suspense, useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const { openMenu } = useMenu();
  const [menu, setMenu] = useState(true);
  const { openMenuMobile, setOpenMenuMobile } = useMenuMobile();

  useEffect(() => {
    setMenu(openMenu);
  }, [openMenu]);

  return (
    <html lang="en">
      <StyledEngineProvider injectFirst>
        <body
          className={`${inter.className} pt-2 fixed overflow-hidden dark:bg-dark-800`}
        >
          <ThemeProvider attribute="class">
            <aside
              className={`transition-all duration-300 block lg:hidden h-screen relative top-0 w-64 lg:w-auto bg-light dark:bg-dark-800 z-50 ${
                openMenuMobile ? "left-0" : "-left-64"
              } pr-3 overflow-y-auto revenueList`}
            >
              <Sidebar />
            </aside>

            <main
              className={`w-screen grid ${
                menu ? "grid-cols-5" : "grid-cols-16"
              } z-30 fixed lg:static top-0`}
            >
              <aside
                className={`lg:col-span-1 hidden lg:block h-screen relative bg-light dark:bg-dark-800 z-50 lg:z-auto -left-60 lg:left-0 lg:row-start-1`}
              >
                <Sidebar />
              </aside>
              <main
                className={`${
                  menu
                    ? "col-span-5 lg:col-span-4"
                    : "lg:col-span-15 col-span-16"
                } mx-2 z-40 lg:z-auto row-start-1`}
              >
                <header className="w-full col-span-1 px-2 py-2 h-16 sticky top-0">
                  <Navigation />
                </header>
                <section className="w-full mt-3 h-screen col-span-1 bg-body dark:bg-dark-900 rounded-t-xl pb-40 overflow-x-hidden overflow-y-scroll sticky top-16">
                  <Suspense fallback={<p>loading ...</p>}>
                    <section className="w-full rounded-t-xl pt-5 px-4 lg:px-10 w-fll overflow-y-auto">
                      {children}
                    </section>
                  </Suspense>
                </section>
              </main>
            </main>
          </ThemeProvider>
        </body>
      </StyledEngineProvider>
    </html>
  );
}
