import { Board } from './ReversiDefinitions';
import { Component } from '@angular/core';
import { ReversiGameEngineService } from './reversi-game-engine.service';
import { cToString } from './ReversiDefinitions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public RGS: ReversiGameEngineService) {}

  Plateau = this.RGS.board.map( L => [...L]) as Board;

  PlateauToString = this.Plateau.map(
    l => l.map(                       // Lignes
      c => cToString(c)               // Collones ou chaque case
    )
  );
}
