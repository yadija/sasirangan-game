import { Link } from "react-router";

// components
import { Button } from "@/components/ui/button";
import AboutSection from "@/pages/home/section/about.section";
import StartButton from "@/pages/home/section/start.button";

export default function Home() {
  return (
    <section className="flex size-full grow flex-col items-center justify-between">
      <section className="flex grow flex-col items-center justify-center">
        <h1 className="mb-5 text-center text-2xl font-bold sm:text-3xl md:text-5xl lg:text-7xl">
          Sasirangan Game
        </h1>

        <section className="flex flex-col gap-2">
          <StartButton />

          <section className="flex flex-col gap-2 sm:flex-row">
            <Button variant="outline">
              <Link to="/learn">Belajar Dulu</Link>
            </Button>
            <AboutSection />
          </section>
        </section>
      </section>

      <footer className="m-5 text-center">
        <p className="text-center text-xs sm:text-base">
          dibuat oleh Kelompok 3
        </p>
      </footer>
    </section>
  );
}
