import React, { useEffect } from 'react'
import { Helmet } from "react-helmet";
import { Global } from '@emotion/react';
import Prism from "prismjs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';

import 'prismjs/themes/prism-okaidia.css';

import { orange, red, teal, yellow } from '../styles/colors';
import { Code, Footer, global, Header, Section } from '../styles/landing';

export const Landing = props => {
  useEffect(() => {
    Prism.highlightAll();
  });

  const setColor = color => {
    switch(color) {
      case 'orange':
        return orange;
      case 'red':
        return red;
      case 'teal':
        return teal;
      case 'yellow':
        return yellow;
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet><title>{props.title}</title></Helmet>
      <Global styles={global} />
      <Header>
        <h1>{props.title}</h1>
        <nav>
          {props.github && <a href={props.github} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>}
          {props.npm && <a href={props.npm} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faNpm} /></a>}
        </nav>
      </Header>
      <Section className="hero" color={setColor(props.color)}>
        <article>
          {props.intro()}
          {props.github && <a className="button" href={props.github} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /> <span>View Documentation</span></a>}
          <Code>
            <div className="dots">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <pre>
              <code className="language-javascript">
                {props.code}
              </code>
            </pre>
          </Code>
        </article>
      </Section>
      <Section>
        <article>
          {props.children}
        </article>
      </Section>
      <Footer>
        <nav>
          <a href={props.npm} target="_blank" rel="noreferrer">Install</a>
          <a href={props.github} target="_blank" rel="noreferrer">Documentation</a>
          <a href={`${props.github}/issues`} target="_blank" rel="noreferrer">Report Bugs</a>
          <a href="https://chadspencer.com" target="_blank" rel="noreferrer">About the Author</a>
        </nav>
        <p>©{new Date().getFullYear()} Chad Spencer - All Rights Reserved</p>
      </Footer>
    </>
  );
};
