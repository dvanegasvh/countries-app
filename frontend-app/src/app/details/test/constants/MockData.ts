export const MOCK_DATA = {
    name: 'Brazil',
    flag: 'https://restcountries.eu/data/bra.svg',
    borders: ['ARG', 'BOL', 'COL', 'GUF', 'GUY', 'PRY', 'PER', 'SUR', 'URY', 'VEN'],
    capital: 'Brasília',
    currencies: ['Pesos'],
    languages: ['Portuguese'],
    population: 206135893,
    region: 'Americas',
    subregion: 'South America',
    top_level: '.d',
    native_names: ['Brasil'],
    characteristics: [],
};

export const MOCK_CHARACTERISTICS = [
    {
        title: 'Population:',
        description: MOCK_DATA.population,
    },
    {
        title: 'Region:',
        description: MOCK_DATA.region,
    },
    {
        title: 'Capital:',
        description: MOCK_DATA.capital,
    },
    {
        title: 'Native Name:',
        description: MOCK_DATA.native_names[0],
    },
    {
        title: 'Top Level Domain:',
        description: MOCK_DATA.top_level,
    },
    {
        title: 'Currencies:',
        description: MOCK_DATA.currencies[0],
    },
    {
        title: 'Languages:',
        description: MOCK_DATA.languages[0],
    },
];
