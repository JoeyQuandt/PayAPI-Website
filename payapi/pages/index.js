import Hero from "../components/hero/hero";
import Layout from "../components/layout";
import Clients from "../components/clients/clients";
import About from "../components/about/about";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Clients />
        <About />
      </Layout>
    </>
  );
}
