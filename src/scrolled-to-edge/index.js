import React, { useState } from 'react'

import { ScrolledToEdge, useScrolledToEdge } from 'scrolled-to-edge';
import classNames from 'classnames/bind';

import { Landing } from '../app/components/landing';
import { Example, Toast } from './styles';

const Page = () => {
  const [windowScrollPosition, setWindowScrollPosition] = useState(null);
  const [examplePosition, setExamplePosition] = useState(null);
  const [navPosition, setNavPosition] = useState(null);

  useScrolledToEdge(e => {
    if (e.y === 'start') {
      setWindowScrollPosition('at the top');
    }
    if (e.y === 'end') {
      setWindowScrollPosition('at the bottom');
    }
    if (e.y === 'middle') {
      setWindowScrollPosition('somewhere in the middle');
    }
    if (e.y === null) {
      setWindowScrollPosition(null);
    }
  });

  const exampleClasses = classNames({
    'at-top': examplePosition === 'start' || examplePosition === null,
    'at-bottom': examplePosition === 'end' || examplePosition === null
  });

  const navClasses = classNames({
    'at-left': navPosition === 'start' || navPosition === null,
    'at-right': navPosition === 'end' || navPosition === null
  });

  return (
    <Landing
      code={`// Install
npm i scrolled-to-edge
yarn add scrolled-to-edge

// Hook Example
import { useScrolledToEdge } from 'scrolled-to-edge';

const App = () => {
  scrollingContainer = useScrolledToEdge(e => console.log(e.x, e.y));

  return (
    <div className="scrolling-container" ref="scrollingContainer">
      // Content
    </div>
  );
}

// Component Example
import { ScrolledToEdge } from 'scrolled-to-edge';

const App = () => {
  return (
    <ScrolledToEdge onChange={e => console.log(e.x, e.y)}>
      <div className="scrolling-container">
        // Content
      </div>
    </ScrolledToEdge>
  );
}`}
      color="yellow"
      github="https://github.com/chadspencer/scrolledtoedge"
      npm="https://www.npmjs.com/package/scrolled-to-edge"
      intro={() => <>
        <h2>Detect when scroll position is at the top, bottom, left or right.</h2>
        <p>It really seems like there should be a CSS selector for this right? Well, there's not, so now we have this. This is a small react hook and component to detect when an overflowing container or window is scrolled to an edge. Use it however you like and feel free to contribute enhancements, report bugs or just leave comments on GitHub.</p>
      </>}
      title="Scrolled to Edge">
        <article>
          <Toast>This page is scrolled {windowScrollPosition}.</Toast>
          <h3>Container Example</h3>
          <p>The most common use case I've ran into for needing this component is to conditionally render shadows on a container. Having shadows on a scrollable container subtly let's the user know what to do, especially when scrollbars are not present. It's really nice to hide those shadows when you're at the start or end of the container too.</p>
          <p>A little something like this:</p>
          <Example>
            <div>
              Header
              <nav className={navClasses}>
                <ScrolledToEdge onChange={e => setNavPosition(e.x)}>
                  <span>
                    <a href="#">Nav Item</a>
                    <a href="#">Nav Item</a>
                    <a href="#">Nav Item</a>
                    <a href="#">Nav Item</a>
                    <a href="#">Nav Item</a>
                    <a href="#">Nav Item</a>
                    <a href="#">Nav Item</a>
                    <a href="#">Nav Item</a>
                    <a href="#">Nav Item</a>
                    <a href="#">Nav Item</a>
                  </span>
                </ScrolledToEdge>
              </nav>
            </div>
            <div className={exampleClasses}>
              <ScrolledToEdge onChange={e => setExamplePosition(e.y)}>
                <div>
                  <p>Bacon ipsum dolor amet salami pork belly chislic fatback jowl turkey. Tongue prosciutto beef ribs bacon chislic ham ground round filet mignon, pork pork belly chuck hamburger pork chop. Meatloaf chuck strip steak pancetta tri-tip fatback biltong chicken pork belly short ribs short loin landjaeger pork chop. Flank tail spare ribs, salami biltong prosciutto tenderloin brisket buffalo boudin swine ground round rump chislic beef ribs. Andouille cupim pastrami hamburger pancetta kielbasa. Pastrami corned beef pig shank alcatra, turkey cow ribeye landjaeger kevin burgdoggen. Cupim tenderloin pig biltong.</p>
                  <p>Bacon ipsum dolor amet salami pork belly chislic fatback jowl turkey. Tongue prosciutto beef ribs bacon chislic ham ground round filet mignon, pork pork belly chuck hamburger pork chop. Meatloaf chuck strip steak pancetta tri-tip fatback biltong chicken pork belly short ribs short loin landjaeger pork chop. Flank tail spare ribs, salami biltong prosciutto tenderloin brisket buffalo boudin swine ground round rump chislic beef ribs. Andouille cupim pastrami hamburger pancetta kielbasa. Pastrami corned beef pig shank alcatra, turkey cow ribeye landjaeger kevin burgdoggen. Cupim tenderloin pig biltong.</p>
                  <p>Bacon ipsum dolor amet salami pork belly chislic fatback jowl turkey. Tongue prosciutto beef ribs bacon chislic ham ground round filet mignon, pork pork belly chuck hamburger pork chop. Meatloaf chuck strip steak pancetta tri-tip fatback biltong chicken pork belly short ribs short loin landjaeger pork chop. Flank tail spare ribs, salami biltong prosciutto tenderloin brisket buffalo boudin swine ground round rump chislic beef ribs. Andouille cupim pastrami hamburger pancetta kielbasa. Pastrami corned beef pig shank alcatra, turkey cow ribeye landjaeger kevin burgdoggen. Cupim tenderloin pig biltong.</p>
                  <p>Bacon ipsum dolor amet salami pork belly chislic fatback jowl turkey. Tongue prosciutto beef ribs bacon chislic ham ground round filet mignon, pork pork belly chuck hamburger pork chop. Meatloaf chuck strip steak pancetta tri-tip fatback biltong chicken pork belly short ribs short loin landjaeger pork chop. Flank tail spare ribs, salami biltong prosciutto tenderloin brisket buffalo boudin swine ground round rump chislic beef ribs. Andouille cupim pastrami hamburger pancetta kielbasa. Pastrami corned beef pig shank alcatra, turkey cow ribeye landjaeger kevin burgdoggen. Cupim tenderloin pig biltong.</p>
                </div>
              </ScrolledToEdge>
            </div>
            <div>Footer</div>
          </Example>
        </article>
    </Landing>
  );
}

export default Page;
