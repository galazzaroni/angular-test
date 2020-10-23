import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as mapboxgl from "mapbox-gl/dist/mapbox-gl"
import { ThemeService } from 'ng2-charts';
import { forkJoin } from 'rxjs';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { environment } from "../../environments/environment";

@Injectable({
providedIn: 'root'
})

export class MapService {


  countryData = this.http.get<any>('../../assets/countries.geo.json');

  map: mapboxgl.Map;
  style = 'mapbox://styles/galazzaroni/ckglv5kdk0h5w19qf5644ea41';
  lat = 45.899977;
  lng = 6.172652;
  zoom = 12

  constructor(private http: HttpClient) {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    })
    this.map.addControl(new mapboxgl.NavigationControl());
  }

  loadCountryData(): Observable<any> {
    return forkJoin([this.countryData, this.getUpdatedCovidData()]);
  }

  getUpdatedCovidData(): Observable<any> {
    return this.http.get<any>('https://api.thevirustracker.com/free-api?countryTotals=ALL').pipe(
      pluck('countryitems'),
      map(resp => {
        return resp[0];
      })
    );
  }

  getMarkers() {
    const geoJson = [{
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': ['80.20929129999999', '13.0569951']
      },
      'properties': {
        'message': 'Chennai'
      }
    }, {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': ['77.350048', '12.953847' ]
      },
      'properties': {
        'message': 'bangulare'
      }
    }];
    return geoJson;
  }
}