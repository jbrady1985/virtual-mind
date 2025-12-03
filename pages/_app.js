// pages/_app.js
import "../styles/globals.css"; // ✅ relative path from /pages to /styles

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
