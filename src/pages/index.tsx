import WhitelistSelf from "@/components/WhitelistSelf";
import { Inter, Roboto } from "next/font/google";
import Image from "next/image";
import devSvg from "@/assets/cdev.svg";
import { useAccount } from "wagmi";
import SpotsCounter from "@/components/SpotsCounter";
import Header from "@/components/Header";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const { isConnected, address } = useAccount();

  return (
    <div className={`${roboto.className}px-7 `}>
      <Header />

      <main className="flex flex-col md:flex-row justify-center px-7 items-center gap-7">
        <div className="flex flex-col gap-3">
          <h1>Welcome to crypto Devs</h1>
          <h2>NFT collection for the best crypto devs</h2>
          {isConnected && <WhitelistSelf />}

          {isConnected && <SpotsCounter />}
        </div>

        <Image
          src={devSvg}
          width={200}
          height={200}
          alt="minimalist crypto dev"
          className="w-2/3 "
        />
      </main>
      <p className="text-center">
        Made with love by <a href="https://twitter.com/alicedev153298">8koi</a>
      </p>
    </div>
  );
}
