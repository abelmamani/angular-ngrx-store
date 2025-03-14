import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { adaptMarvelResponse } from '../adapters/character.adapter';
import { Character } from '../models/character.model';
import { environment } from 'src/environments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private url: string = environment.apiUrl;
  http = inject(HttpClient);

  getAllCharacters(): Observable<Character[]>{
    return this.http.get<Character[]>(this.url).pipe(map((res: any)=> adaptMarvelResponse(res)));
  }

}
