import FavoriteProjects from "@/components/landing/FavoriteProjects";
import Hero from "@/components/landing/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      
      <div>
        <Hero/>
      </div>
      <FavoriteProjects/>
    </main>
  );
}
