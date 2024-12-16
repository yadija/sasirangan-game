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
    <main className="m-auto grid h-screen bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd98YXF0irQENhSBfItW4RYoPSdyxMMX7YXQ&s')]">
      <section className="m-auto h-[90%] w-4/5 rounded bg-white/50 backdrop-blur-lg">
        <nav className="absolute p-2">
          <h1>
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
