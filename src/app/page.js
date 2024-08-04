'use client'

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div class="p-10">Cypher Break</div>
      <Link href="/ceaser"><div>Ceaser cypher</div></Link>
      <Link href="/affine"><div>Affine cypher</div></Link>
      <Link href="/playfair"><div>Playfair cypher</div></Link>
    </main>
  );
}
