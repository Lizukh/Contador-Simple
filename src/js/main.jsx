import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import SecondsCounter from "./components/SecondsCounter";

const root = ReactDOM.createRoot(document.getElementById("root"));
const startTime = Date.now();
const tick = () => {
  const secondsMore = Math.floor((Date.now() - startTime) / 1000);
  root.render(
    <React.StrictMode>
      <Home />
      <SecondsCounter seconds={secondsMore} />
    </React.StrictMode>
  );
};

setInterval(tick, 1000);