import { CovidService } from '../services/covid.service';
import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { SpacePipe } from './../space.pipe';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SmartTableDatepickerComponent, SmartTableDatepickerRenderComponent } from '../smart-table-datepicker/smart-table-datepicker.component'
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers: [
    SpacePipe
  ]
})
export class CountryComponent implements OnInit {

  //@Input() countryStr:string;
  country:any = [];
  paramCountry:any;
  data:any = [];
  loaded:boolean = false;

  /** Chart Options */
  public chartOptions = {
    responsive: true,
    scales : {
      yAxes: [{
          ticks: {
            stepSize: 1,
            beginAtZero: false
          }
      }]
    }
  };
  
  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[];
  
  pipe = new DatePipe('en-US');
  //chartLabels = this.country.map(a => a.Date);

  /** Table options */
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
                  type: 'html'
                },
      //CountryCode: { title: 'Code' },
      /*​​Date: { 
              title: 'Date', 
              type: 'custom',
              renderComponent: SmartTableDatepickerRenderComponent,
              editor: {
                type: 'custom',
                component: SmartTableDatepickerComponent,
              },
              valuePrepareFunction: (Date:any) => {
                return new DatePipe('en-US').transform(Date, 'yyyy-M-d')
            }
      },*/
      Date: {
          title: 'Date',
          sortDirection: 'desc',
          filter: {
            type: 'daterange',
            config: {
              daterange: {
                format: 'yyyy-mm-dd'
              }
            }
          },
          valuePrepareFunction: (Date:any) => {
            return new DatePipe('en-US').transform(Date, 'yyyy-M-dd')
          }
      },
      Confirmed: { title: 'New Confirmed', filter: false },
      Deaths: { title: 'New Deaths', filter: false },
      Recovered: { title: 'New Recovered', filter: false },
      //Slug: {title: 'Slug'},
      Active: {title: 'Total Confirmed', filter: false },
    }
  };

  constructor(private service:CovidService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.paramCountry = params.get('country'); // This line converts id from string into num
        //console.log(this.paramCountry);
      });
      this.getAllByCountry(this.paramCountry);

      //this.setDataChart(this.country);
    // set data for charts
    /*this.lineChartData = [
      { data: this.data.map(a => a.Active), label: 'Actives' },
      { data: this.data.map(d => d.Deaths), label: 'Deaths' },
      { data: this.data.map(c => c.Confirmed), label: 'Confirmed' }
    ];*/
    //this.lineChartLabels = this.data.map(a => a.Date);

  }

  getAllByCountry(paramCountry) {
    this.service.getByCountry(paramCountry).subscribe((data: any[]) => {
      this.country = data; 
      console.log(this.country);
      this.setDataChart(this.country);
      //console.log(this.country.map(a => a.Date));

      // set data for charts
      /*this.lineChartLabels = this.country.map(a => a.Date);
      this.lineChartData = [
        { data: this.country.map(a => a.Active), label: 'Actives' },
        { data: this.country.map(d => d.Deaths), label: 'Deaths' },
        { data: this.country.map(c => c.Confirmed), label: 'Confirmed' }
      ];*/
      
    })
  }

  setDataChart(data) {
    console.log('soy setDataChart');
    console.log(data.map(a => a.Date));
    // set data for charts
    this.lineChartLabels = data.map(a => this.pipe.transform(a.Date, 'yyyy-M-dd'));
    this.lineChartData = [
      { data: data.map(a => a.Active), label: 'Actives' },
      { data: data.map(d => d.Deaths), label: 'Deaths' },
      { data: data.map(c => c.Confirmed), label: 'Confirmed' }
    ];
    this.loaded = true;
  }

  onChartClick(event) {
    console.log("me hicieron click");
  }

}