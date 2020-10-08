import * as Highcharts from 'highcharts';
import { Component, OnInit, Input } from '@angular/core';
import { DATA_MODEL } from 'src/app/interfaces/age-by-range.interface';

const DATA: DATA_MODEL[] = [
	{ name: "Age 1-9", y: 20 },
	{ name: "Age 10-29", y: 30 },
	{ name: "Age 30-49", y: 45 }
]

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})

export class PieComponent implements OnInit {

  @Input() agesByRange;

  DATA_BY_AGES: DATA_MODEL[] = [];

  chartOptions: {};

  Highcharts: typeof Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
	    chart: {
	        plotBackgroundColor: null,
	        plotBorderWidth: null,
	        plotShadow: false,
	        type: 'pie'
	    },
	    title: {
	        text: 'Confirmed cases by ages'
	    },
	    tooltip: {
	        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	    },
	    accessibility: {
	        point: {
	            valueSuffix: '%'
	        }
	    },
	    plotOptions: {
	        pie: {
	            allowPointSelect: true,
	            cursor: 'pointer',
	            dataLabels: {
	                enabled: true,
	                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
	            }
	        }
	    },
	    series: [{
	        name: 'Brands',
	        colorByPoint: true,
	        data: DATA
	    }]
	};

	setTimeout(() => {
		window.dispatchEvent(
			new Event('resize'))
	}, 300);

  };
  setSeries() {
	for (const item in this.agesByRange) {
		console.log("Ages " + item)
		this.DATA_BY_AGES.push({ name: item, y: this.agesByRange[item] })
	}
  };

}
