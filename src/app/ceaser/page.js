'use client'

import Ceasercypher from "../../components/ceasercypher";
import CeaserCypherInfo from "../../components/ceasercypherinfo";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div class="p-10">Cypher Break</div>
      <Ceasercypher></Ceasercypher>
      <CeaserCypherInfo></CeaserCypherInfo>
    </main>
  );
}