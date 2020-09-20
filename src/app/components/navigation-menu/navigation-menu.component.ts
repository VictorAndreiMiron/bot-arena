import { Component, OnInit } from '@angular/core';
import { ArenaService } from '../../services/arena/arena.service'
import { Arena } from '../../models/arena/arena.model'
@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {
  arenas: Arena[]
  constructor(
    private arenaService: ArenaService
  ) { }

  ngOnInit(): void {
    this.arenas = this.arenaService.getArenas()
  }

}
