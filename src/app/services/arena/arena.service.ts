import { Injectable } from '@angular/core';
import { Arena } from '../../models/arena/arena.model'
@Injectable({
  providedIn: 'root'
})
export class ArenaService {
  arenas: Arena[]
  constructor() { }

  def getArenas(){
    this.arenas = [{id:1,name:"TicTacToe"}]
    return this.arenas
  }
}
