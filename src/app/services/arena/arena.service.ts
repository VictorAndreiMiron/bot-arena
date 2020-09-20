import { Injectable } from '@angular/core';
import { Arena } from '../../models/arena/arena.model'
@Injectable({
  providedIn: 'root'
})
export class ArenaService {
  arenas: Arena[] = [{name:"TicTacToe",bots:[{name:"QBot",type:"q_table_bot",info:"CATERINCA1"},{name:"QBot_2",type:"q_table_bot",info:"CATERINCA2"}]}];
  constructor() { }

  getArenas(): Arena[]{
    return this.arenas;
  }
  getArenaByName(name: string): Arena{
    return this.arenas[0];
  }
}
