import { Component, ViewChild, OnInit, AfterViewInit, ElementRef} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { BotInfo } from '../../models/bot-info/bot-info.model'
@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit, AfterViewInit {
  @ViewChild('myCanvas', {static: false}) myCanvas: ElementRef<HTMLCanvasElement>;
  bot: any;
  gameBoard: number[][];
  x: number = 1;
  o: number = -1;
  empty: number = 0;
  turn: boolean = true;
  context: CanvasRenderingContext2D;
  canvas: any;
  square: number;
  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
     this.canvas = this.myCanvas.nativeElement;
     this.context = this.myCanvas.nativeElement.getContext('2d');
     let size = this.canvas.offsetWidth;
     this.square = Math.floor(size/3);
     this.drawGameGrid();
     this.gameInit();
     this.canvas.addEventListener('click',(event) => this.gameLoop(event))
  }
  gameInit():void{
    this.gameBoard = []
    for(let i=0; i<3; i++){
      this.gameBoard[i] = []
      for(let j=0; j<3; j++) {
        this.gameBoard[i][j] = this.empty;
      }
    }
  }
  async gameLoop(event): Promise<any>{
    let xPosition = Math.floor((event.pageX - this.canvas.offsetWidth + 40) / (this.square-2) ) - 3;
    let yPosition = Math.floor((event.pageY - this.canvas.offsetWidth - 40) / (this.square-2) ) + 2;
    if(this.turn){
      if(this.gameBoard[xPosition][yPosition] ==  this.empty){
        this.gameBoard[xPosition][yPosition] = this.x;
        this.drawX(xPosition,yPosition)
      }
      else{
        alert("Illegal move");
        return;
      }
    }
    else{
      if(this.gameBoard[xPosition][yPosition] ==  this.empty){
        this.gameBoard[xPosition][yPosition] = this.o;
        this.drawO(xPosition,yPosition)
      }
      else{
        alert("Illegal move");
        return;
      }
    }
    this.turn = !this.turn;
    let winner = this.getWinner()
    if(winner != undefined){
      this.drawResult(winner)
      await new Promise(r => setTimeout(r, 2000));
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawGameGrid();
      this.gameInit();
    }
  }

  numberToSymbol(number:number):string{
    return number == this.x ? "X" : "Y";
  }
  drawResult(winner):void{
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.font = "100px Georgia";
    this.context.textAlign = "center";
    let displayMessage = "DRAW"
    if(winner != this.empty){
      displayMessage = `${this.numberToSymbol(winner)} won`
    }
    this.context.fillText(displayMessage, this.canvas.width/2, this.canvas.height/2);
  }
  getWinner(): number{
    let diagSum = 0;
    let revDiagSum = 0;
    let emptyCells = 0;
    for(let i=0; i<3; i++){
        let lineSum = 0;
        let colSum = 0;
        for(let j=0; j<3; j++){
          lineSum += this.gameBoard[i][j];
          colSum += this.gameBoard[j][i];
          if(this.gameBoard[i][j] == this.empty){
            emptyCells++;
          }
        }
        if(lineSum == 3 || colSum == 3){
          return this.x;
        }
        else if(lineSum == -3 || colSum == -3){
          return this.o;
        }
        diagSum += this.gameBoard[i][i];
        revDiagSum += this.gameBoard[i][2-i];
    }
    if(diagSum == 3 || revDiagSum == 3){
      return this.x;
    }
    else if (diagSum == -3 || revDiagSum == -3){
      return this.o
    }
    if(emptyCells == 0){
      return this.empty;
    }
    return undefined;
  }

  drawGameGrid():void{
      this.context.lineWidth = 5;
          //Line 1
      this.context.beginPath();
      this.context.moveTo(this.square, 0); //defines starting point of line 1
      this.context.lineTo(this.square, this.canvas.height); //ending point of line 1
      this.context.stroke();
      //Line 2
      this.context.beginPath();
      this.context.moveTo(this.square * 2, 0);
      this.context.lineTo(this.square * 2, this.canvas.height);
      this.context.stroke();
      //Line 3
      this.context.beginPath();
      this.context.moveTo(0, this.square);
      this.context.lineTo(this.canvas.width, this.square);
      this.context.stroke();
      //Line 4
      this.context.beginPath();
      this.context.moveTo(0, this.square*2);
      this.context.lineTo(this.canvas.width, this.square*2);
      this.context.stroke();
    }

    drawX(x,y){
      this.context.beginPath();
      this.context.moveTo(10 + x * this.square,10 + y*this.square);
      this.context.lineTo(this.square - 10 + x * this.square, this.square - 10 + y*this.square);
      this.context.stroke();
      this.context.beginPath();
      this.context.moveTo(this.square-10 + x * this.square, 10 + y*this.square);
      this.context.lineTo(10 + x * this.square, this.square-10 + y*this.square);
      this.context.stroke();
    }
    drawO(x,y){
      this.context.lineWidth = 5;
      this.context.beginPath();
      this.context.arc(this.square/2+  x * this.square,this.square/2 + y*this.square,0.4*this.square,0,2*Math.PI);
      this.context.stroke();
    }
}
