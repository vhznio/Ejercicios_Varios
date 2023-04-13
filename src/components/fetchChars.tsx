export const fetchChars = async (): Promise<Character[]> => {
    const responde = await fetch('https://rickandmortyapi.com/api/character');
    const data = await responde.json();
    return data.results;
}