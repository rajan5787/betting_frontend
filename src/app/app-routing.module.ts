import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import {RaceComponent} from './components/race/race.component';

const routes: Routes = [
    {
        path : '',
        component : HomeComponent
    },
    {
        path : 'welcome',
        component : WelcomeComponent 
    },
    {
        path : 'race/:id',
        component : RaceComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
