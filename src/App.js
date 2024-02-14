import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Claim from "./pages/Claim";
import Bridge from "./pages/Bridge";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/claim" element={<Claim />} />

          <Route path="/stats" element={<Stats />} />

          <Route path="/bridge" element={<Bridge />} />
          {/* Define other routes that you need*/}
        </Routes>
        <div className="connect">
          <ConnectWallet className={"customWallet"} />
        </div>
      </main>
    </Router>
  );
};
export default App;

// const address = useAddress();
// console.log(address);
