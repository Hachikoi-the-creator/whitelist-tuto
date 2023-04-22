import Image from "next/image";
import logoSvg from "../assets/logo.svg";
import { Web3Button } from "@web3modal/react";

export default function Header() {
  return (
    <header className="flex justify-between p-3 align-middle object-cover">
      <Image
        src={logoSvg}
        width={200}
        height={100}
        alt="crypto devs with a cool blubble style"
        className="-ml-5"
      />
      <Web3Button />
    </header>
  );
}
