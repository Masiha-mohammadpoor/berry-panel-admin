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
          <header className="bg-light w-full p-6 sticky top-0">
            header
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
