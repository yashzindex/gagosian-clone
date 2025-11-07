import Image from "next/image";
import BannerSlider from "./components/BannerSlider";
import { Header } from "./components/header";
import GallaryCard from "./components/GallaryCard";

export default function Home() {
  return (
    <>
      <Header />
      <BannerSlider />
      <GallaryCard />
    </>
  );
}
