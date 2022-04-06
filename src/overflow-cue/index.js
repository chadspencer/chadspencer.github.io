import React from 'react'

import { useOverflowCue } from 'overflow-cue';

import { Landing } from '../app/components/landing';
import { Example } from './styles';

const Page = () => {
  const containerRef = useOverflowCue(15, 4);

  return (
    <Landing
      code={`// Install
npm i overflow-cue
yarn add overflow-cue

// Example
import { useOverflowCue } from 'overflow-cue';

const App = () => {
  const tabs = useOverflowCue(padding, buffer, selector);

  return (
    <nav ref="tabs">
      <a href="">Item 1</a>
      <a href="">Item 2</a>
      <a href="">Item 3</a>
      <a href="">Item 4</a>
      <a href="">Item 5</a>
    </nav>
  );
}`}
      color="orange"
      github="https://github.com/chadspencer/overflowcue"
      npm="https://www.npmjs.com/package/overflow-cue"
      intro={() => <>
        <h2>Truncate the text of an overflowing item to give a visual cue that the container is scrollable.</h2>
        <p>Yes, I know you could use gradients or other visual cues, but sometimes we just want to keep it nice and clean. This is a simple little react hook that takes a set of horizontal overflowing items, such as tabs, and ensures an item is cropped appropriately to indicate the container is scrollable. Use it however you like and feel free to contribute enhancements, report bugs or just leave comments on GitHub.</p>
      </>}
      title="Overflow Cue">
        <article>
          <h3>Example</h3>
          <p>In scenarios where we have overlfowing items with no visible scrollbar, we need a way to indicate that the container is scrollable. Specifically with tab treatments, similar to Material Design's <a href="https://material.io/components/tabs#scrollable-tabs" target="_blank" rel="noreferrer">scrollable tabs</a>, the horizontal padding often ends up creating gutters where it is not clear to the user that there are additional tabs to scroll to. Rather than adding an offset at the beginning, with this utility we're able to detect when this problem is occuring and add just enough horizontal space to overcome the confusion.</p>
          <p>Resize the window, you'll see.</p>
          <Example>
            <nav ref={containerRef}>
              <a href="">An Item</a>
              <a href="">Another Item</a>
              <a href="">Short Item</a>
              <a href="">Really Long Item</a>
              <a href="">An Item</a>
              <a href="">Another Item</a>
              <a href="">Short Item</a>
              <a href="">Really Long Item</a>
              <a href="">An Item</a>
              <a href="">Another Item</a>
              <a href="">Short Item</a>
              <a href="">Really Long Item</a>
              <a href="">An Item</a>
              <a href="">Another Item</a>
              <a href="">Short Item</a>
              <a href="">Really Long Item</a>
              <a href="">An Item</a>
              <a href="">Another Item</a>
              <a href="">Short Item</a>
              <a href="">Really Long Item</a>
            </nav>
          </Example>
          <p>We did it! Magic right? The text is always cropped, just a little, just enough.</p>
        </article>
    </Landing>
  );
}

export default Page;