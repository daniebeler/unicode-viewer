import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <table>
        <tr className="sticky top-0">
          <th>Symbol</th>
          <th>Unicode-Nummer</th>
          <th>HTML-Code</th>
        </tr>
        {[...Array(3000)].map((x, i) => {
          const fief = String.fromCodePoint(i);
          console.log(fief);

          return (
          <tr key={i}>
            <td>{fief}</td>
            <td>{'U+' + i.toString(16).padStart(4, '0').toUpperCase()}</td>
            <td>{'&#' + i + ';'}</td>
          </tr>
          )
        })}
      </table>
    </main>
  );
}
