import React from "react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Claimable from "./Claimable";
const UUID = "9e95f314-d9dc-437e-aa66-58c87a1c72a4";

const Call = () => {
  var connectedAddresss = useAddress();

  const response = fetch(
    "https://hibxjljwpk.execute-api.us-east-1.amazonaws.com/serverless_lambda_stage/proof",
    {
      method: "POST",
      body: JSON.stringify({
        address: connectedAddresss,
        uuid: UUID,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const result = response.json();
  return result;
};

const Claim = () => {
  const data = Call();
  <div>{data}</div>;

  //   return address ? (
  //     <div>
  //       <p className="p2">test</p>
  //     </div>
  //   ) : (
  //     //<p className="p1">wallet connected {address}</p>
  //     <Claimable />
  //   );
};

export default Claim;
