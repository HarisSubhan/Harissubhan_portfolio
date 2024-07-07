import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { Body } from "./components/Body";
import { Experience } from "./components/Experience";
import { Whychoose } from "./components/Whychoose";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Body />
      <Whychoose />
      <Experience />
    </main>
  );
}
