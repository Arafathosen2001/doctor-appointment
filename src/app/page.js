import Image from "next/image";
import banner from '../../public/assets/Banner.png'
import { Content } from "next/font/google";
import { Button } from "@heroui/react";
import Link from "next/link";
import AutoPlay from "@/Component/AutoPlay";
import FetcherDoctor from "@/Component/FetcherDoctor";
import WhyChooseUs from "@/Component/othersSections/WhyChooseUs";
import MedicalSpecialties from "@/Component/othersSections/MedicalSpecialties";
import PatientTestimonials from "@/Component/othersSections/PatientTestimonials";
import BannerSlider from "@/Component/BannerSlider";


export default function Home() {
  return (
    <div className="container">
      <AutoPlay></AutoPlay>
      {/* <BannerSlider></BannerSlider> */}
      <FetcherDoctor></FetcherDoctor>
      <WhyChooseUs />
      <MedicalSpecialties />
      <PatientTestimonials />
    </div>
  );
}
