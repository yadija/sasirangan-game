import { useRoutes } from "react-router";

// pages
import Home from "@/pages/home";
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
  ]);

  return (
    <main className="m-auto grid h-screen bg-[url('./assets/images/background-white.jpeg')] bg-cover">
      <section className="m-auto h-[90%] w-4/5 rounded bg-white/50 backdrop-blur-lg">
        <nav className="absolute p-2">
          <h1 className="text-sm font-bold sm:text-base">
            {localStorage.getItem("name")
              ? `Halo, ${localStorage.getItem("name")}`
              : "Selamat Datang"}
          </h1>
        </nav>

        {element}
      </section>
    </main>
  );
}
