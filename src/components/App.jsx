import React from 'react';
import ReactGA from 'react-ga';

import Generator from './Generator';
import Hero from './Hero';

const App = props => {
  if (process.env.REACT_APP_GA_ID) {
    ReactGA.initialize(process.env.REACT_APP_GA_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  } else {
    console.log('No Google tracking ID found...');
  }

  return (
    <React.Fragment>
      <main role="main">
        <Hero />
        <Generator />
      </main>
    </React.Fragment>
  );
};

export default App;
