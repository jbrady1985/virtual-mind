// pages/_app.js
import "@/styles/globals.css"; // keep if you have global styles; otherwise remove
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
