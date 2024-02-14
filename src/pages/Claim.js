import React from "react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Claimable from "./Claimable";

const Claim = () => {
  const address = useAddress();

  return !address ? (
    <div>
      <p className="p1">Are you worthy of being plugged?</p>
      <p className="p2">Connect wallet to find out</p>
    </div>
  ) : (
    //<p className="p1">wallet connected {address}</p>
    <Claimable />
  );
};

export default Claim;
