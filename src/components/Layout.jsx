import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import Phone from "./Phone";

export default function Layout({ children }) {
  return (
    <>
      <Phone  />
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
