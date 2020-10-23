import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { MapComponent } from './map/map.component';
import { MapgoogleComponent } from './mapgoogle/mapgoogle.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'country/:country', component: CountryComponent },
  { path: 'map', component: MapComponent },
  { path: 'mapgoogle', component: MapgoogleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
