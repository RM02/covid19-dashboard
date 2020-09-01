import * as Highcharts from 'highcharts';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() label: string;
  @Input() total: number;
  @Input() porcentage: number;
  @Input() color:string;

  chartOptions: {};

  Highcharts: typeof Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
	    chart: {
	        type: 'area',
	        backgroundColor: null,
	        borderWidth: 0,
	        margin: [2, 2, 2, 2],
	        height: 60
	    },
	    title: {
	        text: null
	    },
	    subtitle: {
	        text: null
	    },
	    tooltip: {
	        split: true,
	        outside: true
	    },
	    plotOptions: {
	        bar: {
	            dataLabels: {
	                enabled: true
	            }
	        }
	    },
	    legend: {
	        enabled: false
	    },
	    credits: {
	        enabled: false
	    },
	    xAxis: {
	    	labels: {
	    		enabled: true
	    	},
	    	title: {
	    		text: null
	    	},
	    	startOnTick: false,
	    	endOnTick: false,
	    	tickOptions: []
	    },
	    series: [{
	        data: [107, 31, 150, 203],
	        color: this.color
	    }]
	};

	setTimeout(() => {
		window.dispatchEvent(
			new Event('resize'))
	}, 300);
  }

}
