import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GlobalStore } from '@app/stores/character.store';
import { Character } from '../../models/character.model';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatToolbarModule, MatCardModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  characters: Character[] = [];
  characterService = inject(CharacterService);
  store = inject(GlobalStore);

  ngOnInit(): void {
    this.getAllCharacters();
  }

  getAllCharacters(){
    this.characterService.getAllCharacters().subscribe({
      next: (res: Character[]) => {this.characters = res;}, 
      error: (error) => {console.log(error)}
    });
  }

  addFavourite(character: Character){
    this.store.addCharacter(character);
  }

  existsCharacter(id: number): boolean{
    return this.store.characters().some(character => character.id === id);
  };
}
