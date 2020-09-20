import { Component, OnInit, Input } from '@angular/core';
import { Bot } from '../../models/bot/bot.model'
@Component({
  selector: 'app-bot-info',
  templateUrl: './bot-info.component.html',
  styleUrls: ['./bot-info.component.css']
})
export class BotInfoComponent implements OnInit {

  @Input() bot:Bot;
  constructor() { }

  ngOnInit(): void {
  }

}
