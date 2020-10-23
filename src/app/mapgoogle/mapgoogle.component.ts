import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapgoogle',
  templateUrl: './mapgoogle.component.html',
  styleUrls: ['./mapgoogle.component.css']
})
export class MapgoogleComponent implements OnInit {

  location: Location;

  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  constructor() { }

  ngOnInit(): void {
    this.location = {
      latitude: -53.68352,
      longitude: -180.20785
    }
  }

}

interface Location {
  latitude: number;
  longitude: number
}