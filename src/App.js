import React from 'react';
import { Suspense } from 'react';
import Scene from './Components/Scene';
import Content from './Components/Content';
import './App.scss';

function App() {

  return (
    <div className="bg-white w-full App flex flex-col">

      <div className="z-0 w-full h-screen absolute text-9xl border-b-2 border-orange-200">
        <Suspense fallback={
          <div className="loader">
              <span className="loader-block"></span>
              <span className="loader-block"></span>
              <span className="loader-block"></span>
              <span className="loader-block"></span>
              <span className="loader-block"></span>
              <span className="loader-block"></span>
              <span className="loader-block"></span>
              <span className="loader-block"></span>
              <span className="loader-block"></span>
          </div>
        }>
          <Scene className=""/>
        </Suspense>
      </div>

      <Content/>

    </div>
  );
}

export default App;
