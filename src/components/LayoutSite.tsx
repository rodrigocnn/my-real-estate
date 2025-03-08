import { ReactNode } from "react";
import Topbar from "./Topbar";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Topbar />
      <Navbar />

      <main>{children}</main>
      <Footer />
    </div>
  );
}
