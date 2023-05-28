import SSRPokemonTable from "@/components/SSRPokemonTable";

import { store } from "@/store";
import { setStartupPokemon } from "@/store/searchSlice";

export default async function Home() {
  const req = await fetch("http://localhost:3000/api/search");
  const data = await req.json();
  store.dispatch(setStartupPokemon(data));

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="pb-8">Pure SSR Pokemon Redux</h1>
      <SSRPokemonTable />
    </main>
  );
}
