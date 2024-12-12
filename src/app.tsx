import { useRoutes } from "react-router";

export default function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <div>Home</div>,
    },
  ]);

  return (
    <main className="m-auto grid h-screen bg-[url('https://i.pinimg.com/736x/d5/4a/1e/d54a1e5fd3b883bb410ae11a64f46c08.jpg')]">
      <section className="m-auto h-[90%] w-4/5 rounded bg-white/30 backdrop-blur">
        {element}
      </section>
    </main>
  );
}
