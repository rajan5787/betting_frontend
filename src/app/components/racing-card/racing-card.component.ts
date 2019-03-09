import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-racing-card',
  templateUrl: './racing-card.component.html',
  styleUrls: ['./racing-card.component.css']
})
export class RacingCardComponent implements OnInit {
  @Input() race:any;
  constructor() { }

  ngOnInit() {
    
  }

}
