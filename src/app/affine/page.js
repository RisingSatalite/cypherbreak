'use client'

import AffineCypher from "@/components/affinecypher";
import AffineCypherInfo from "@/components/affinecypherinfo";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div class="p-10">Cypher Break</div>
      <AffineCypher/>
      <AffineCypherInfo/>
    </main>
  );
}