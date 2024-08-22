import Navigation from "@/components/Navigation";
import "../globals.css";
import Sidebar from "@/components/Sidebar";
import { StyledEngineProvider } from '@mui/material/styles';
import { Inter } from 'next/font/google'

export const metadata = {
  title: "dashborad",
  description: "dashboard",
};

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StyledEngineProvider injectFirst>
      <body className={`${inter.className} overflow-hidden grid grid-cols-5`}>
      <aside className="bg-light col-span-1 sticky top-0 bottom-0 h-screen">
          <Sidebar />
        </aside>
        <main className="col-span-4 overflow-hidden">
          <header className="px-2 py-2 w-full bg-light sticky top-0">
            <Navigation/>
          </header>
          <section className="mt-3 mx-2 h-screen bg-body rounded-t-xl overflow-y-auto pb-20">
            <section className="rounded-t-xl pt-5 px-10">
              {children}
            </section>
          </section>
        </main> 
      </body>
      </StyledEngineProvider>
    </html>
  );
}

