import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectOverview from "./components/ProjectOverview";
import Features from "./components/Features";
import ResearchDetails from "./components/ResearchDetails";
import Milestones from "./components/Milestones";
import Documents from "./components/Documents";
import Presentations from "./components/Presentations";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app-shell">
      <div className="app-backdrop" aria-hidden="true" />
      <Navbar />
      <main className="app-main">
        <Hero />
        <ProjectOverview />
        <Features />
        <ResearchDetails />
        <Milestones />
        <Documents />
        <Presentations />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
