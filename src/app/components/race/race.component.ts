import { Component, OnInit } from '@angular/core';
import {Races} from '../../races';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {
    public race:any;
    public horses:any[];
    public raceId:string;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.raceId = this.route.snapshot.paramMap.get('id');
    this.race=Races.find((race) => race.raceId==this.raceId);
    this.horses=this.race.horseData;
  }

}
