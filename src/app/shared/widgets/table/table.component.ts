import { Component, OnInit, Input } from '@angular/core';
import { Model } from 'src/app/interfaces/list-module.interface';

const MOCK_DATA: Model[] = [
  { country: 'Argentina', totalConfirmed: 35502, totalRecovered: 20426, totalDeaths: 2506, status: 'parcial' },
  { country: 'Brazil', totalConfirmed: 22502, totalRecovered: 10426, totalDeaths: 1506, status: 'lock down' },
  { country: 'EEUU', totalConfirmed: 350502, totalRecovered: 205426, totalDeaths: 92506, status: 'lock down' },
  { country: 'España', totalConfirmed: 250, totalRecovered: 30, totalDeaths:120, status: 'parcial' },
  { country: 'Ecuador', totalConfirmed: 250, totalRecovered: 30, totalDeaths:120, status: 'lock down' },
  { country: 'Italia', totalConfirmed: 250, totalRecovered: 30, totalDeaths:120, status: 'parcial' },
  { country: 'Francia', totalConfirmed: 250, totalRecovered: 30, totalDeaths:120, status: 'lock down' },
  { country: 'Jamaica', totalConfirmed: 250, totalRecovered: 30, totalDeaths:120, status: 'lock down' },
  { country: 'Venezuela', totalConfirmed: 250, totalRecovered: 30, totalDeaths:120, status: 'lock down' }
] 

@Component({
  selector: 'app-widget-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  dataSource = MOCK_DATA;
  displayedColumns: string[] = ['country', 'totalConfirmed', 'totalRecovered', 'totalDeaths', 'indicator'];

  constructor() { }

  ngOnInit(): void {
  }

  edit() {
    alert("Click")
  }

}
