import Image from "next/image";
import Ceasercypher from "./components/ceasercypher";
import AffineCypher from "./components/affinecypher";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div class="p-10">Cypher Break</div>
      <Ceasercypher></Ceasercypher>
      <AffineCypher></AffineCypher>
    </main>
  );
}
