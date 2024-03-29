import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <article className="root-container">
        <section className="wrapper">{children}</section>
      </article>
    </main>
  );
};

export default Layout;
