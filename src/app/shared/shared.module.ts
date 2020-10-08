import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AreaComponent } from './widgets/area/area.component';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { TableComponent } from './widgets/table/table.component';

@NgModule({
  declarations: [
	  HeaderComponent,
	  FooterComponent,
	  SidebarComponent,
	  AreaComponent,
	  CardComponent,
	  PieComponent,
	  TableComponent
	],
  imports: [
    CommonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatListModule,
    HighchartsChartModule
  ],
  exports: [
  	HeaderComponent,
  	FooterComponent,
  	SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    TableComponent
  ]
})
export class SharedModule { }
