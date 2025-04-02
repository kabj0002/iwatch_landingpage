// import "./globals.css";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex justify-between">
        <Main />
        <Gallery />
      </div>
    </div>
  );
}
