import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';


export default props => {
  return (
    <Container style={{"background-image": "linear-gradient(#bebcd0, #dedaf2,white)"}}>
    <br/>
      <Head>
      <link href="https://fonts.googleapis.com/css?family=Chakra+Petch|Merriweather" rel="stylesheet"/>
      <link rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />


      </Head>

      <Header />
      {props.children}
      <br/><br/><br/>
    </Container>
  );
};
