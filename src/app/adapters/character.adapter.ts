import { Character } from "../models/character.model";

export function adaptMarvelResponse(apiResponse: any): Character[] {
    const results = apiResponse.data.results;
    return results.map((character: any) => ({
      id: character.id,
      name: character.name,
      description: character.description || 'No description available',
      thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
    }));
  }