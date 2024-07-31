'use client'

import Image from "next/image";
import Ceasercypher from "../components/ceasercypher";
import AffineCypher from "../components/affinecypher";
import CeaserCypherInfo from "../components/ceasercypherinfo";
import AffineCypherInfo from "../components/affinecypherinfo";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div class="p-10">Cypher Break</div>
      <Ceasercypher></Ceasercypher>
      <CeaserCypherInfo></CeaserCypherInfo>
      <AffineCypher></AffineCypher>
      <AffineCypherInfo></AffineCypherInfo>
    </main>
  );
}
