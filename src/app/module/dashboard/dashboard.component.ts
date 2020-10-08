import { Component, OnInit } from '@angular/core';
import { CoronavirusDataService } from 'src/app/services/coronavirus-data.service';
import { Ages } from 'src/app/interfaces/age-by-range.interface';
import { States } from 'src/app/interfaces/cases-by-states.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalDeaths: number;
  totalRecovered: number;
  totalConfirmed: number;
  
  porcentageDeaths:number;
  porcentageActives:number;
  porcentageRecovered:number;

  confirmedByAge: Ages = {};
  confirmedByStates: States = {};

  loading: boolean = true;
  value: number = 50;

  constructor(private dataApi: CoronavirusDataService) { }

  ngOnInit(): void {
  	this.getInfo()
    setTimeout(() => {
      this.loading = false
    }, 1000);
  }

  getInfo() {
  	this.dataApi.getSummary()
  	.subscribe((data:any) => {
      this.setTotalCases(data.Global)
      //this.setDataByAge(data.Confirmed.ByAgeRange)
      //this.confirmedByStates = data.Confirmed.ByState
  	})
  };

  setDataByAge(data: Ages) {
    for (const item in data) {
      this.confirmedByAge[item] = data[item]
    }

  };

  setTotalCases(data) {
    this.totalConfirmed = data.TotalConfirmed
    this.totalDeaths = data.TotalDeaths
    this.totalRecovered = data.TotalRecovered
  }
}
