// components
import HistorySection from "@/pages/learn/section/history.section";
import IntroduceSection from "@/pages/learn/section/introduce.section";
import MakingSection from "@/pages/learn/section/making.section";
import PatternSection from "@/pages/learn/section/pattern.section";

export default function Learn() {
  return (
    <section className="flex size-full flex-col items-center justify-center">
      <section className="flex flex-col items-center justify-center">
        <h1 className="mb-5 text-7xl font-bold">Mari Belajar</h1>
      </section>

      <section className="space-x-2">
        <IntroduceSection />
        <HistorySection />
        <MakingSection />
        <PatternSection />
      </section>
    </section>
  );
}
