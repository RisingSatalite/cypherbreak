'use client'

import PlayfairCypher from "@/components/playfaircypher";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div class="p-10">Cypher Break</div>
      <PlayfairCypher/>
    </main>
  );
}