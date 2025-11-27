import { gql } from "@apollo/client";
import createApolloClient from "@/apollo-client";
import type {
  Country,
  GetCountryQuery,
  GetCountryVariables,
} from "@/app/types";

const client = createApolloClient();

export async function fetchCountries(): Promise<Country[]> {
  const { data } = await client.query<GetCountryQuery, GetCountryVariables>({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  if (!data?.countries) return [];

  return data.countries.slice(0, 4);
}
