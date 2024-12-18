import { useRoutes } from "react-router";

// components
import Navbar from "@/components/common/navbar";
// pages
import Home from "@/pages/home";
import Leaderboards from "@/pages/leaderboards";
import Learn from "@/pages/learn";
import Quiz from "@/pages/quiz";

export default function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/learn",
      element: <Learn />,
    },
    {
      path: "/quiz",
      element: <Quiz />,
    },
    {
      path: "/leaderboards",
      element: <Leaderboards />,
    },
  ]);

  return (
    <main className="m-auto grid h-screen bg-[url('./assets/images/background-white.jpeg')] bg-cover">
      <section className="m-auto h-[90%] w-4/5 rounded bg-white/50 backdrop-blur-lg">
        <Navbar />

        {element}
      </section>
    </main>
  );
}
