//if on allowlist allow to claim, if not show message saying not eligible
import React, { useState, useEffect } from "react";
import {
  useContract,
  useAddress,
  Web3Button,
  useContractRead,
} from "@thirdweb-dev/react";
import { parse } from "uuid";
import { bytesToHex } from "viem";
import Claimed from "./Claimed";
import NoClaim from "./NoClaim";

const CA = "0x4adD12903B4A425dbfb8799990273AA6027108eC";
//
const UUID = "9e95f314-d9dc-437e-aa66-58c87a1c72a4";
const bytesArray = parse("9e95f314-d9dc-437e-aa66-58c87a1c72a4");
const hexId = bytesToHex(bytesArray);
//
const api =
  "https://hibxjljwpk.execute-api.us-east-1.amazonaws.com/serverless_lambda_stage/proof";

//
const Claimable = () => {
  const connectedAddresss = useAddress();
  const contract = useContract({ CA });
  const [result, setResult] = useState(null); // State to store the result
  const [expr, setExpr] = useState(""); // State to store the expression
  const amount = 0;

  async function callAPI() {
    const response = await fetch(
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
    const result = await response.json();
    setResult(result);
    setExpr(
      result.canClaim
        ? "canClaim"
        : result.hasClaimed
        ? "hasClaimed"
        : "cantClaim"
    );
    console.log(result.amount);
    console.log(result.proof);
    console.log(result.canClaim);
  }

  useEffect(() => {
    if (connectedAddresss) {
      callAPI(); // Call the function when the component mounts and connectedAddresss is set
    }
  }, [connectedAddresss]); // Depend on connectedAddresss

  //canClaim, hasClaimed, cantClaim
  switch (expr) {
    case "canClaim":
      return (
        <div>
          <div className="p1">
            You are eligible for {JSON.stringify(result.amount).slice(1, -19)}{" "}
            $PLUG
          </div>
          <div className="claimText"> </div>

          <Web3Button
            className="button"
            contractAddress="0x4adD12903B4A425dbfb8799990273AA6027108eC"
            action={(contract) => {
              contract.call("claimTokens", [
                hexId,
                [JSON.stringify(result.proof).slice(2, -2)],
                JSON.stringify(result.amount).slice(1, -1),
              ]);
            }}
            //onSuccess={() => navigate("/Claimed.js")} // Navigate to claimed page on success
          >
            Claim $PLUG
          </Web3Button>
        </div>
      );
    case "hasClaimed":
      return <Claimed />;

    default:
      return <div className="p1"> error </div>;
  }
};
export default Claimable;
