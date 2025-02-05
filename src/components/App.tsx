import React from "react";

import Generator from "./Generator";
import Hero from "./Hero";

const App = () => {
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
