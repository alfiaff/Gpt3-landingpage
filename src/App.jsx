import React from 'react';
import 'tailwindcss/tailwind.css';

import {Header, Jumbotron, Brand, About, Target, Banner, Article, Footer} from './components'
const App = () => {
  return (
    <div className="w-full h-fit bg-baseCustom">
     <div>
        <Header />
        <Jumbotron />
        <Brand />
        <About />
        <Target />
        <Banner />
        <Article />
        <Footer />
     </div>
    </div>
  );
}

export default App;