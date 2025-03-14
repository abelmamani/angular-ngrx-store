import { inject, InjectionToken } from '@angular/core';
import { Character } from '@app/models/character.model';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type StoreState = {
    characters: Character[]
}

const initialState: StoreState = {characters: []};

const STORE_STATE = new InjectionToken<StoreState>("GlobalStore", {factory: () => initialState});

export const GlobalStore = signalStore(
    {providedIn: "root"},
    withState(() => inject(STORE_STATE)),
    withMethods((store) => ({
        addCharacter(character: Character){
            patchState(store, ({characters}) => ({
                characters: [...characters, character]
            }));
        },
        deleteCharacter(id: number){
            const updatedCharacters = store.characters().filter(c => c.id !== id);
            patchState(store, ({characters})=> ({
                characters: updatedCharacters
            }));
        }
    }))
);