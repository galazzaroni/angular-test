import { SpacePipe } from './../space.pipe';
import { Component, OnInit } from '@angular/core';
import { CovidService } from './../shared/covid.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    SpacePipe
  ]
})
export class HomeComponent implements OnInit {

  global: { [key:string]:string};
  countries:any = [];
  data = [];

  settings = {
    actions: false,
    pager: {  
      display: true,  
      perPage: 15  
    }, 
    attr: {  
      class: 'table table-bordered table-hover'  
    },  
    defaultStyle: false,  
    columns: {
      Country: { 
                  title: 'Country', 
                  filter: false,
                  type: 'html',
                  valuePrepareFunction: (country) => {
                    return  '<a onclick="onCustom($event)" href="/countries/' + country + '"><strong>' + country + '</strong></a>'; 
                  }
                },
      //CountryCode: { title: 'Code' },
      ​​Date: { 
              title: 'Date', 
              filter: false, 
              valuePrepareFunction: (Date:any) => {
                return new DatePipe('en-US').transform(Date, 'yyyy-M-d')
            }
      },
      NewConfirmed: { title: 'New Confirmed', filter: false },
      NewDeaths: { title: 'New Deaths', filter: false },
      NewRecovered: { title: 'New Recovered', filter: false },
      //Slug: {title: 'Slug'},
      TotalConfirmed: {title: 'Total Confirmed', filter: false },
      TotalDeaths: {title: 'Total Deaths', filter: false },
      TotalRecovered: {title: 'Total Recovered', filter: false }
    }
  };


  constructor(private service:CovidService) { }

  ngOnInit(): void {
    this.getAllSummary();
  }

  getAllSummary() {
    this.service.getSummary().subscribe((data: any[]) => {
      this.global = data['Global'];
      //console.log(this.global);
    })
    this.service.getSummary().subscribe((data:any[]) => {
      this.countries = data['Countries'];
      console.log(this.countries);
    })
  }

  getData() {
    return Object.assign([], this.data);
  }

}
