import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { FormControl,FormBuilder, Validators} from "@angular/forms";
import { TicTacToeComponent } from '../../components/tic-tac-toe/tic-tac-toe.component'
import { ArenaService } from '../../services/arena/arena.service'
import { Arena } from '../../models/arena/arena.model'
import { Bot } from '../../models/bot/bot.model'
@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})
export class ArenaComponent implements OnInit,AfterViewInit {
  arena: Arena;
  selectedBot: Bot;

  componentRef: ComponentRef<any>;

  @ViewChild("gameContainer", { read: ViewContainerRef })
   game: any;

  selectBotForm = this.formBuilder.group({
    bot: new FormControl(),
  })
  constructor(
    private route: ActivatedRoute,
    private arenaService: ArenaService,
    public formBuilder: FormBuilder,
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this.arena = this.arenaService.getArenaByName(this.route.routeConfig.children[0].path);
    this.selectedBot = this.arena.bots[0];
  }
  ngAfterViewInit(): void{
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(TicTacToeComponent);
    this.componentRef = this.game.createComponent(factory);
    this.componentRef.instance.botInfo = this.selectedBot;
  }
  changeBot(event){
    this.selectedBot = this.selectBotForm.value.bot
    this.componentRef.instance.botInfo = this.selectedBot;
  }


  ngOnDestroy() {
  this.componentRef.destroy();
  }
}
