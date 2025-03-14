import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GlobalStore } from '@app/stores/character.store';

@Component({
  selector: 'app-favourite',
  imports: [CommonModule, MatListModule, MatButtonModule, MatToolbarModule],
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.scss'
})
export class FavouriteComponent {
  store = inject(GlobalStore);

  deleteCharacter(id: number){
    this.store.deleteCharacter(id);
  };
}
