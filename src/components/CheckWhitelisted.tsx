import { ABI, CONTRACT_ADDRESS } from "@/assets/contractData";
import { useContractWrite, usePrepareContractWrite } from "wagmi";

export default function CheckWhitelisted() {
  const { config } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: ABI,
    functionName: "UserToWhitelisted",
  });

  const { write } = useContractWrite(config);

  return (
    <div>
      <button
        disabled={!write}
        onClick={() => write?.()}
        className="bg-pink-700 rounded p-2 hover:cursor-pointer"
      >
        Whitelist self
      </button>
    </div>
  );
}
