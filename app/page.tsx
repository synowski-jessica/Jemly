import Header from "./(public)/_components/header";
import Hero from "./(public)/_components/hero";

export default function Home() {
  return (
    <>
    <Header/>
    <div className="">
      <main className="">
        <Hero/>
      </main>
    </div>
    </>
  );
}
