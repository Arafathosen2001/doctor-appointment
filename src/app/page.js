import Image from "next/image";
import banner from '../../public/assets/Banner.png'
import { Content } from "next/font/google";
import { Button } from "@heroui/react";
import Link from "next/link";
import AutoPlay from "@/Component/AutoPlay";
import FetcherDoctor from "@/Component/FetcherDoctor";


export default function Home() {
  return (
    <div className="container">
      <AutoPlay></AutoPlay>
      <FetcherDoctor></FetcherDoctor>
    </div>
  );
}
