import { Component, OnInit } from '@angular/core';
import { CoronavirusDataService } from 'src/app/services/coronavirus-data.service';
import { Model } from 'src/app/interfaces/list-module.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  loading: boolean = true;
  value: number = 50;
  model: Model[] = [];
  
  constructor(private Api: CoronavirusDataService) { }

  ngOnInit(): void {
    this.getData()
  	setTimeout(() => {
      this.loading = false
    }, 1000);
  }

  getData() {
    this.Api.getSummary()
    .subscribe((data:any) => {
      this.setTableModel(data.Countries)
    })
  }

  setTableModel(data) {
    for (const element in data) {
      this.model.push({ country: data[element].Country, totalConfirmed: data[element].TotalConfirmed, totalRecovered: data[element].TotalRecovered, totalDeaths: data.TotalDeaths, status: 'lock down' })
    }
  }

}
