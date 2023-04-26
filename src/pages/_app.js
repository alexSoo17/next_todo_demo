import NavBar from "@/components/layout/navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <NavBar>
      <Component {...pageProps} />
    </NavBar>
  );
}
