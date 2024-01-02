import Head from "next/head";
import React from "react";

export default function Title(props) {
  return (
    <>
      <Head>
        <title>{props.page ? props.page : <p>ok</p>} Page </title>
      </Head>
    </>
  );
}
