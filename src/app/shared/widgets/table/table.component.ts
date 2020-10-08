import { Component, OnInit, Input } from '@angular/core';
import { Model } from 'src/app/interfaces/list-module.interface';

const MOCK_DATA: Model[] = [
  { country: 'Argentina', totalConfirmed: 35502, totalRecovered: 20426, totalDeaths: 2506 },
  { country: 'Brazil', totalConfirmed: 22502, totalRecovered: 10426, totalDeaths: 1506 },
  { country: 'EEUU', totalConfirmed: 350502, totalRecovered: 205426, totalDeaths: 92506 },
  { country: 'Venezuela', totalConfirmed: 250, totalRecovered: 30, totalDeaths:120 }
] 

@Component({
  selector: 'app-widget-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  dataSource = MOCK_DATA;
  displayedColumns: string[] = ['country', 'totalConfirmed', 'totalRecovered', 'totalDeaths'];

  constructor() { }

  ngOnInit(): void {
  }

}
