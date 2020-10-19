import { CovidService } from './../shared/covid.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  country:any = [];

  constructor(private service:CovidService) { }

  ngOnInit(): void {
    this.getAllByCountry();
  }

  getAllByCountry() {
    this.service.getByCountry().subscribe((data: any[]) => {
      this.country = data;
      console.log(this.country);
    })
  }

}
