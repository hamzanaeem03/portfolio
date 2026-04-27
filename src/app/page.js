import Navigation    from "@/components/Navigation";
import Hero          from "@/components/Hero";
import StatsBar      from "@/components/StatsBar";
import Experience    from "@/components/Experience";
import Projects      from "@/components/Projects";
import Skills        from "@/components/Skills";
import About         from "@/components/About";
import Contact       from "@/components/Contact";
import Footer        from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor  from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import KonamiEgg    from "@/components/KonamiEgg";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <KonamiEgg />
      <Navigation />
      <main>
        <Hero />
        <StatsBar />
        <Experience />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
