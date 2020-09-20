import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationEvent} from '@angular/animations';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  animations: [
    trigger('smallLarge', [
    state('small', style({
        color: 'white'
    })),
    state('large', style({
      color:'black',
    })),
    transition('small => large', [
      animate('2s')
    ]),
    transition('large => small', [
      animate('1s')
    ])
  ]),

   ]
})
export class WelcomeComponent implements AfterViewInit {

  constructor(private changeDetectorRef: ChangeDetectorRef) { }
  state: string = 'small';
  ngAfterViewInit(): void {
    this.state="large";
    this.changeDetectorRef.detectChanges();
  }
  onAnimationEvent( event: AnimationEvent ) {
  }

}
