import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
