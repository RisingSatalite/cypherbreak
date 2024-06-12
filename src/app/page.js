import Image from "next/image";
import Ceasercypher from "./components/ceasercypher";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Cypher Break</div>
      <Ceasercypher></Ceasercypher>
    </main>
  );
}
