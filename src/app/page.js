import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "80px" }}>
        {/* Content goes here */}
      </div>
      <Footer/>
    </>
  );
}
