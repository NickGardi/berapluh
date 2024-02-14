import React from "react";
import ReactDOM from "react-dom/client";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/index.css";
import App from "./App";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "goerli";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThirdwebProvider
    activeChain={activeChain}
    clientId={process.env.REACT_APP_TEMPLATE_CLIENT_ID}
  >
    <App />
  </ThirdwebProvider>
);
