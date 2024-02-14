import React from "react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Claimable from "./Claimable";

const Claimed = () => {
  const address = useAddress();
  return <div className="p1">You have already claimed your $PLUG</div>;
};

export default Claimed;
