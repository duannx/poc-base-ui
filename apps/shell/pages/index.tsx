import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import {
  Button,
  CoreButton,
  Heading,
  sharedFunction,
  // StyleContext,
  // getDefaultValue,
} from "@duannx-poc-base-ui/core";

// import type { ComponentStyle } from "@duannx-poc-base-ui/core";

import dynamic from "next/dynamic";
import { Suspense, lazy } from "react";
import { IconMono } from "@t1rearc-ui-base/component";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  sharedFunction();
  // const MFE1Button = dynamic(() => import("MFE1/Button"), { ssr: true });
  // const MFE1Heading = dynamic(() => import("MFE1/Heading"), { ssr: true });
  // const MFE2Button = dynamic(() => import("MFE2/Button"), { ssr: true });
  // const MFE2Heading = dynamic(() => import("MFE2/Heading"), { ssr: true });

  const MFE1Button = lazy(() => import("MFE1/Button"));
  const MFE1Heading = lazy(() => import("MFE1/Heading"));
  const MFE2Button = lazy(() => import("MFE2/Button"));
  const MFE2Heading = lazy(() => import("MFE2/Heading"));
  // const ssrComponentStyles: Array<ComponentStyle> = [];

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {/* <StyleContext.Provider value={getDefaultValue(ssrComponentStyles)}> */}
          <section>
            <h2>Shell components</h2>
            <Button
              onClick={() => {
                console.log("button onclick");
              }}
            ></Button>
            <Heading></Heading>
            <IconMono name="ChervonUpToggle" brand="aeg" />
            <CoreButton></CoreButton>
          </section>
          <Suspense fallback={`...loading`}>
            <section>
              <h2>MFE1 componentss</h2>
              <MFE1Button></MFE1Button>
              <MFE1Heading></MFE1Heading>
            </section>
            <section>
              <h2>MFE2 components</h2>
              <MFE2Button></MFE2Button>
              <MFE2Heading></MFE2Heading>
            </section>
          </Suspense>
        {/* </StyleContext.Provider> */}
      </main>
    </>
  );
}
