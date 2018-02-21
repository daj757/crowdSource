import React from "react";
import { Menu, Container } from "semantic-ui-react";
import Head from 'next/head'
import Header from "./header";
export default props => {
  return (
    <div>
    <Container>
      <Header/>
      {props.children}
      <Head>
      <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
      </Head>
    </Container>
    </div>
  );
};
