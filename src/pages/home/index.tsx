import { Link } from "react-router";

// components
import { Button } from "@/components/ui/button";
import StartButton from "@/pages/home/section/start.button";

export default function Home() {
  return (
    <section className="flex size-full grow flex-col items-center justify-between">
      <section className="flex grow flex-col items-center justify-center">
        <h1 className="mb-5 text-7xl font-bold">Sasirangan Game</h1>

        <section className="space-x-2 text-center">
          <StartButton />
          <Button variant="outline">
            <Link to="/learn">Belajar Dulu</Link>
          </Button>
        </section>
      </section>

      <footer className="m-5">
        <p>dibuat oleh Kelompok 3</p>
      </footer>
    </section>
  );
}
