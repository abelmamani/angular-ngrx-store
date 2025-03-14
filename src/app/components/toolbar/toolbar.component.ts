import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GlobalStore } from '@app/stores/character.store';
import { FavouriteComponent } from '../favourite/favourite.component';

@Component({
  selector: 'app-toolbar',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  store =inject(GlobalStore);
  dialog = inject(MatDialog);
  getFavourites(){
    this.dialog.open(FavouriteComponent, {width: '500px'});
  }
}
