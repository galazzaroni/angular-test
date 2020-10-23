import { SpacePipe } from './space.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryComponent } from './country/country.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { SmartTableDatepickerComponent, SmartTableDatepickerRenderComponent } from './smart-table-datepicker/smart-table-datepicker.component'
import { ChartsModule } from 'ng2-charts';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { MapgoogleComponent } from './mapgoogle/mapgoogle.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    SpacePipe, CountryComponent,
    SmartTableDatepickerComponent,
    SmartTableDatepickerRenderComponent,
    MapComponent,
    MapgoogleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SmartTableModule,
    FormsModule,
    ChartsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAcLRbFucRoN1DJQxZTIwjXXPch9CDTn8c'
    })/*,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiZ2FsYXp6YXJvbmkiLCJhIjoiY2tna2U2dzRuMDF3dTMwcGE0b3Z2d2s4cCJ9.zYasHFTZmC9uLDvK0QaSwQ', // Optionnal, can also be set per map (accessToken input of mgl-map)
      geocoderAccessToken: 'pk.eyJ1IjoiZ2FsYXp6YXJvbmkiLCJhIjoiY2tna2U2dzRuMDF3dTMwcGE0b3Z2d2s4cCJ9.zYasHFTZmC9uLDvK0QaSwQ' // Optional, specify if different from the map access token, can also be set per mgl-geocoder (accessToken input of mgl-geocoder)
    })*/
  ],
  entryComponents: [
    SmartTableDatepickerComponent,
    SmartTableDatepickerRenderComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }
