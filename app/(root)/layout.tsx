import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />

      <article className="root-container">
        <section className="wrapper">{children}</section>
      </article>
    </main>
  );
};

export default Layout;
