import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { NextSeo } from "next-seo";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Dhruv Pankaj Patel</title>
        <meta name="author" content="Portfolio Website" />
        <meta
          name="keywords"
          content="Dhruv Pankaj Patel, Dhruv, Dhruv vit, Dhruv pankaj, Dhruv pankaj patel, Dhruv patel, Dhruv pankaj patel vit, Dhruv pankaj patel vit vellore, Dhruv pankaj patel vellore, Dhruv pankaj patel vellore institute of technology, Dhruv pankaj patel vellore institute of technology vellore, Dhruv pankaj patel vellore institute of technology vellore tamil nadu, Dhruv pankaj patel vellore institute of technology vellore tamil nadu india, Dhruv pankaj patel vellore institute of technology vellore tamil nadu india 632014, Dhruv pankaj patel vellore institute of technology vellore tamil nadu india 632014 dhruv pankaj patel, Dhruv pankaj patel vellore institute of technology vellore tamil nadu india 632014 dhruv pankaj patel dhruv pankaj patel, Dhruv pankaj patel vellore institute of technology vellore tamil nadu india 632014 dhruv pankaj patel dhruv pankaj patel dhruv pankaj patel, Dhruv pankaj patel vellore institute of technology vellore tamil nadu india 632014 dhruv pankaj patel dhruv pankaj patel dhruv pankaj patel dhruv pankaj patel, Dhruv pankaj patel vellore institute of technology vellore tamil nadu india 632014 dhruv"
        />
      </Head>
      <NextSeo
        title="Dhruv Pankaj Patel"
        description="This is the portfolio website of Dhruv Pankaj Patel. Dhruv is a Information Technology Engineering undergraduate student at Vellore Institute of Technology, Vellore, Tamil Nadu, India."
        twitter={{
          handle: "@thereal_dhruv",
          cardType: "summary_large_image",
        }}
      />
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
        }}
      >
        <Component {...pageProps} />
        <ToastContainer />
      </MantineProvider>
    </>
  );
}
