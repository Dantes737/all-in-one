import { fetchCountries } from "@/app/lib/data";

export default async function Page() {
  const countries = await fetchCountries();

  return (
    <main>
      <div className="grid grid-cols-2 gap-4">
        {countries.map((country) => (
          <div key={country.code} className=" bg-amber-200 p-6 rounded-lg">
            <h3>{country.name}</h3>
            <p>
              {country.code} - {country.emoji}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
