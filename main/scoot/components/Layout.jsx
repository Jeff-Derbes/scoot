import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import JoinNow from "./JoinNow/JoinNow";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <JoinNow />
      <Footer />
    </>
  );
}
