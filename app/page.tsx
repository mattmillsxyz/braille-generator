import Generator from "@/components/Generator";
import Hero from "@/components/Hero";

export default function App() {
  return (
    <main
      role="main"
      className="p-8 h-screen flex flex-col items-center justify-center md:w-1/2 mx-auto"
    >
      <Hero />
      <Generator />
    </main>
  );
}
