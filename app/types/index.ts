export interface Country {
  code: string;
  name: string;
  emoji: string;
}

export type GetCountryQuery = {
  countries: Array<Country>;
};
export type GetCountryVariables = Record<string, never>;
