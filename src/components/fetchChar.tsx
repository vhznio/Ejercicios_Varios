export const fetchChar = async (id:number): Promise<Character> => {
    const responde = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await responde.json();
    return data.results;
}