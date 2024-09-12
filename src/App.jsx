import Navbar from "./components/Navbar";
// import Banner from "./components/Baner";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
function App() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <HeroSection />
      <Services />
      {/* <Banner /> */}
    </div>
  );
}

export default App;
