import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { ArenaService } from '../../services/arena/arena.service'
import { Arena } from '../../models/arena/arena.model'
@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})
export class ArenaComponent implements OnInit {
  arena: Arena;
  constructor(
    private route: ActivatedRoute,
    private arenaService: ArenaService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.arena = this.arenaService.getArenaById(+params.get('id'));
      });
  }

}
