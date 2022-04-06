import React, { useEffect, useRef } from 'react';
import {Helmet} from "react-helmet";
import { Global } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { Article, Footer, global, Main, Nav, NavLink, Section } from '../app/styles/home';
import { data } from './data';

const Page = () => {
  const main = useRef(null);
  const nav = useRef(null);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sectionHeight = main.current.offsetHeight;
    const navItemHeight = nav.current.firstChild.offsetHeight;

    main.current.scroll(0, sectionHeight * (scrollPosition / navItemHeight));
  };

  const handleNav = index => {
    const navItemHeight = nav.current.firstChild.offsetHeight;

    window.scroll(0, index * navItemHeight);
  };

  return <>
    <Global styles={global} />
    <Helmet><title>Chad Spencer</title></Helmet>
    <Nav ref={nav}>
      {data.map((entry, index) => entry.color && <NavLink color={entry.color} key={`nav-${index}`} onClick={() => handleNav(index)}>{entry.title}</NavLink>)}
    </Nav>
    <Main ref={main}>
      {data.map((entry, index) => (
        <Section color={entry.color} key={`section-${index}`}>
          <Article>
            {entry.color ? <h2>{entry.title}</h2> : <h1>{entry.title}</h1>}
            {entry.description && <p dangerouslySetInnerHTML={{ __html: entry.description }} />}
          </Article>
        </Section>
      ))}
    </Main>
    <Footer>
      <div className="container">
        <nav>
          <a href="https://www.linkedin.com/in/chadspencer" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a href="https://github.com/chadspencer" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://twitter.com/chadspen" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
        </nav>
        <p className="center">©{new Date().getFullYear()} Chad Spencer - All Rights Reserved</p>
      </div>
    </Footer>
  </>;
};

export default Page;
