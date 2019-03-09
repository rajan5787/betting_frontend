import { Component, OnInit } from '@angular/core';
import {Races} from '../../races';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public pageTitle: string = "Welcome";
  public races:any;
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    document.getElementById('navbar').style.display = '';
    this.races=Races;
  }

  OnSelectRace(race: any){
    this.router.navigate(['race', race.raceId]);
  }
}
