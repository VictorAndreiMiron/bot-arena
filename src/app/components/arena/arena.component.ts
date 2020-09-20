import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { FormControl,FormBuilder, Validators} from "@angular/forms";
import { ArenaService } from '../../services/arena/arena.service'
import { Arena } from '../../models/arena/arena.model'
import { Bot } from '../../models/bot/bot.model'
@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})
export class ArenaComponent implements OnInit {
  arena: Arena;
  selectedBot: Bot;

  selectBotForm = this.formBuilder.group({
    bot: new FormControl(),
  })
  constructor(
    private route: ActivatedRoute,
    private arenaService: ArenaService,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.arena = this.arenaService.getArenaByName(this.route.routeConfig.children);
  }
  changeBot(event){
    this.selectedBot = this.selectBotForm.value.bot
  }
}
