import { SimpleFooter } from "../components/Footer";
import Banner from "../components/Home/Banner";
import Features from "../components/Home/Features";

function Home() {
  return (
    <>
      <main className="w-full bg-light">
        <Banner />
        <Features />
      </main>
      <SimpleFooter />
    </>
  );
}

export default Home;
