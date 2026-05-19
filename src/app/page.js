import Image from "next/image";
import banner from '../../public/assets/Banner.png'
import { Content } from "next/font/google";
import { Button } from "@heroui/react";
import Link from "next/link";
import AutoPlay from "@/Component/AutoPlay";


export default function Home() {
  return (
    <div className="max-w-11/12 mx-auto">
      <AutoPlay></AutoPlay>
    </div>
  );
}
