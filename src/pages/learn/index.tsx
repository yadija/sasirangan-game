// components
import HistorySection from "@/pages/learn/section/history.section";
import IntroduceSection from "@/pages/learn/section/introduce.section";
import MakingSection from "@/pages/learn/section/making.section";
import PatternSection from "@/pages/learn/section/pattern.section";

export default function Learn() {
  return (
    <section className="flex size-full flex-col items-center justify-center">
      <section className="flex flex-col items-center justify-center">
        <h1 className="mb-5 text-center text-2xl font-bold sm:text-3xl md:text-5xl lg:text-7xl">
          Mari Belajar
        </h1>
      </section>

      <section className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <IntroduceSection />
        <HistorySection />
        <MakingSection />
        <PatternSection />
      </section>
    </section>
  );
}
