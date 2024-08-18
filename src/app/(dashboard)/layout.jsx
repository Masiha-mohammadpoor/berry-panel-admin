import Navigation from "@/components/Navigation";
import "../globals.css";

export const metadata = {
  title: "dashborad",
  description: "dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="grid grid-cols-5">
        <aside className="bg-light col-span-1 sticky top-0 bottom-0 h-screen">
          sidebar
        </aside>
        <main className="col-span-4">
          <header className="px-2 py-2 w-full bg-light sticky top-0">
            <Navigation/>
          </header>
          <section className="mt-3 mx-2 h-screen bg-body rounded-t-xl">
            <section className="rounded-t-xl p-3">
              {children}
            </section>
          </section>
        </main>
      </body>
    </html>
  );
}
