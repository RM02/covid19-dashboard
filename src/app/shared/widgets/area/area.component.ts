import * as Highcharts from 'highcharts';
import { Component, OnInit, Input } from '@angular/core';
import { SERIE_MODEL } from 'src/app/interfaces/cases-by-states.interface';

const SERIE_DATA: SERIE_MODEL[] =  [
	{
	    color: '#FFD740',
	    name: 'Total Confirmed',
	    data: [107, 31, 635, 203, 500]
	},
	{
    	color:'#F44336',
        name: 'Total Deaths',
        data: [133, 156, 947, 408, 120]
	},
	{
    	color: '#9C27B0',
        name: 'Total Recovered',
        data: [814, 841, 3714, 727, 380]
    }
]

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
	        text: 'Source: <a href="https://covid19.patria.org.ve">Covid19.patria.org.ve</a>'
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
	    series: SERIE_DATA
	};

	setTimeout(() => {
		window.dispatchEvent(
			new Event('resize'))
	}, 300);
  }

}
