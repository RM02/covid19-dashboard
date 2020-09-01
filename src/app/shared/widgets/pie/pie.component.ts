import * as Highcharts from 'highcharts';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  @Input() agesByRange: any;

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
	        data: this.setDataSeries(this.agesByRange)
	    }]
	};

	setTimeout(() => {
		window.dispatchEvent(
			new Event('resize'))
	}, 300);
  }

  setDataSeries(data) {
  	var series:number[] = [...];
  	for (const k in data) {
  		series.push(data[k])
  	}
  }

}
