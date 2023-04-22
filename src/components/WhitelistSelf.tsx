import { useEffect, useState } from "react";
import { readContract } from "@wagmi/core";
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";
import { ABI, CONTRACT_ADDRESS } from "@/assets/contractData";

export default function WhitelistSelf() {
  const [isWithelisted, setIsWithelisted] = useState(false);
  const { address } = useAccount();
  const { config } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: ABI,
    functionName: "addSelfToWhitelist",
  });

  const { write } = useContractWrite(config);

  const checkIfWhitelisted = async (): Promise<boolean> => {
    const maybeNumber = await readContract({
      address: CONTRACT_ADDRESS,
      abi: ABI,
      functionName: "UserToWhitelisted",
      args: [address],
    });

    return typeof maybeNumber === "boolean" ? maybeNumber : false;
  };

  useEffect(() => {
    checkIfWhitelisted().then((isInAlready) => setIsWithelisted(isInAlready));
  });

  return (
    <div>
      <button
        disabled={!write || isWithelisted}
        onClick={() => write?.()}
        className="bg-pink-700 rounded p-2 hover:cursor-pointer"
      >
        {isWithelisted ? "Already Whitelisted" : "Whitelist"}
      </button>
    </div>
  );
}
