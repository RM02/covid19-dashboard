import * as Highcharts from 'highcharts';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  @Input() title: string;

  chartOptions: {};

  Highcharts: typeof Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {

    this.chartOptions = {
	    chart: {
	        type: 'bar'
	    },
	    title: {
	        text: this.title
	    },
	    subtitle: {
	        text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
	    },
	    xAxis: {
	        categories: ['EEUU', 'China', 'Rusia', 'Venezuela', 'Argentina'],
	        title: {
	            text: null
	        }
	    },
	    yAxis: {
	        min: 0,
	        title: {
	            text: 'Population (millions)',
	            align: 'high'
	        },
	        labels: {
	            overflow: 'justify'
	        }
	    },
	    tooltip: {
	        valueSuffix: ' millions'
	    },
	    plotOptions: {
	        bar: {
	            dataLabels: {
	                enabled: true
	            }
	        }
	    },
	    legend: {
	        layout: 'vertical',
	        align: 'right',
	        verticalAlign: 'top',
	        x: -40,
	        y: 80,
	        floating: true,
	        borderWidth: 1,
	        backgroundColor:
	            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
	        shadow: true
	    },
	    credits: {
	        enabled: false
	    },
	    series: [{
	    	color: '#0033ff',
	        name: 'Total Confirmed',
	        data: [107, 31, 635, 203, 500]
	    }, {
	    	color:'#444444',
	        name: 'Total Deaths',
	        data: [133, 156, 947, 408, 120]
	    }, {
	    	color: '#33FFFF',
	        name: 'Total Recovered',
	        data: [814, 841, 3714, 727, 380]
	    }]
	};

	setTimeout(() => {
		window.dispatchEvent(
			new Event('resize'))
	}, 300);
  }

}
