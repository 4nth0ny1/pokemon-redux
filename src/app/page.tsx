import PokemonTable from "@/components/PokemonTable";

export default async function Home() {
  const req = await fetch("http://localhost:3000/api/search");
  const data = await req.json();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="pb-8">Pokemon Redux</h1>
      <PokemonTable pokemons={data} />
    </main>
  );
}
