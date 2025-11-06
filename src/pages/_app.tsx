import { type AppType } from "next/app";
import { Geist } from "next/font/google";

import "~/styles/globals.css";
import GoogleAnalytics from "~/components/GoogleAnalytics";

const geist = Geist({
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={geist.className}>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
