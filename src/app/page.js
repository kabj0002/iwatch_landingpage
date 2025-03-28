import "./globals.css";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <div>
      <Header className="header_div" />
      <div className="body">
        <Main className="main_div" />
        <Gallery className="gallery_div" />
      </div>
    </div>
  );
}
