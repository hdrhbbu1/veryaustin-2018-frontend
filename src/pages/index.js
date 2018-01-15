import React from 'react';
import Link from 'gatsby-link';
import Typist from 'react-typist';

const IndexPage = () => (
  <Typist avgTypingDelay={40} startDelay={2000} cursor={{ show: false }}>
    <h1>
      {'<greeting>'}
      <Typist.Delay ms={250} />
      <br />
      My name is Austin<Typist.Delay ms={250} /> Lauritsen
      <Typist.Delay ms={1200} />
      <br />
      & I build for the web
      <Typist.Delay ms={1200} />
      <br />
      {'</greeting>;'}
    </h1>
  </Typist>
)

export default IndexPage

// render() {
//   return <p>{ '<TestComponent>This is a test</TestComponent>'}</p>
// }