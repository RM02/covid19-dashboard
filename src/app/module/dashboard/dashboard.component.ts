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

  totalActive:number = null;
  totalDeaths: number = null;
  totalRecovered: number = null;
  totalConfirmed: number = null;
  porcentageDeaths:number = null;
  porcentageActives:number = null;
  porcentageRecovered:number = null;

  confirmedByAge: Ages = {};
  confirmedByStates: States = {};

  constructor(private dataApi: CoronavirusDataService) { }

  ngOnInit(): void {
  	this.getInfo()

  }

  getInfo() {
  	this.dataApi.getSummary()
  	.subscribe((data:any) => {
      this.setDataByAge(data.Confirmed.ByAgeRange)
      this.setTotalCases(data)
      this.confirmedByStates = data.Confirmed.ByState
  		/*this.porcentageDeaths = ((this.totalDeaths / this.totalConfirmed)*100).toFixed(2)*/
      /*this.porcentageActives = ((this.totalActive / this.totalConfirmed)*100).toFixed(2)*/
  		/*this.porcentageRecovered = ((this.totalRecovered / this.totalConfirmed)*100).toFixed(2)*/
  	})
  };

  setDataByAge(data: Ages) {
    for (const k in data) {
      this.confirmedByAge[k] = data[k]
    }
  };

  setTotalCases(data) {
    this.totalConfirmed = data.Confirmed.Count
    this.totalActive = data.Active.Count
    this.totalDeaths = data.Deaths.Count
    this.totalRecovered = data.Recovered.Count
  }
}
