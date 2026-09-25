import About from "./_components/about";
import Clients from "./_components/clients";
import Hero from "./_components/hero";
import OurServices from "./_components/ourServices";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <OurServices />
      <Clients />
    </main>
  );
}
