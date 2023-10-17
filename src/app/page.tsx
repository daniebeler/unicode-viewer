import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {[...Array(3000)].map((x, i) => {

        const fief = String.fromCodePoint(i)
        console.log(fief)

        return (
          <h1 key={i}>{fief + " " + i}</h1>
        )
  })}
    </main>
  );
}
