import { ABI, CONTRACT_ADDRESS } from "@/assets/contractData";
import { readContract } from "@wagmi/core";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export default function SpotsCounter() {
  const [adxAmount, setAdxAmount] = useState(0);
  const { address } = useAccount();

  const fetchWhitelistedAmount = async (): Promise<number> => {
    const maybeNumber = await readContract({
      address: CONTRACT_ADDRESS,
      abi: ABI,
      functionName: "whitelistedAmount",
    });

    return typeof maybeNumber === "number" ? maybeNumber : 0;
  };

  useEffect(() => {
    fetchWhitelistedAmount().then((num) => setAdxAmount(num));
  });

  return <p> {adxAmount} Whitelisted devs</p>;
}
