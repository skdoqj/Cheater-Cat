import Image from "next/image";
import catImg from "/public/cat1.png";
import { useState } from "react";

export default function Home() {
  const [answer, setAnswer] = useState();

  return (
    <>
      <h1>Cheater Cat</h1>
      {/* <img src="/cat1.png" alt="Cheater cat" /> */}
      <Image src={catImg} alt="cheater cat" height="200" />
      <form>
        <input type="text"></input>
        <button>보내기</button>
      </form>
    </>
  );
}
