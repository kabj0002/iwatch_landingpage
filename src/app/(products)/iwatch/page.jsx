// import "./globals.css";
"use client";
import Main from "@/components/Main";
import Gallery from "@/components/Gallery";

export default function iWatch() {
  return (
    <div>
      <div className="flex justify-between">
        <Main />
        <Gallery />
      </div>
    </div>
  );
}
