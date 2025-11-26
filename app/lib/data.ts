// import { gql } from "@apollo/client";
// import createApolloClient from "@/apollo-client";

interface Country {
  code: string;
  name: string;
  emoji: string;
}

export async function fetchCountries(): Promise<Country[]> {
  // const client = createApolloClient();
  // const { data } = await client.query({
  //   query: gql`
  //     query Countries {
  //       countries {
  //         code
  //         name
  //         emoji
  //       }
  //     }
  //   `,
  // });

  // return data.countries.slice(0, 4);
  return [
    { code: "US", name: "United States", emoji: "🇺🇸" },
    { code: "CA", name: "Canada", emoji: "🇨🇦" },
    { code: "GB", name: "United Kingdom", emoji: "🇬🇧" },
    { code: "FR", name: "France", emoji: "🇫🇷" },
  ];
}
