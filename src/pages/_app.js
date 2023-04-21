import { NextSeo } from "next-seo";
import { MantineProvider } from "@mantine/core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

export default function App(props) {
  const { Component, pageProps } = props;
  return (
    <>
      <NextSeo
        title="Dhruv Pankaj Patel"
        description="This is the portfolio website of Dhruv Pankaj Patel. Dhruv is a Information Technology Engineering undergraduate student at Vellore Institute of Technology, Vellore, Tamil Nadu, India."
        twitter={{ handle: "@thereal_dhruv", cardType: "summary_large_image" }}
      />
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme: "light" }}
      >
        <Component {...pageProps} />
        <ToastContainer />
      </MantineProvider>
    </>
  );
}
