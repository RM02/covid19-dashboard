import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/module/dashboard/dashboard.component';
import { ProfileComponent } from 'src/app/module/profile/profile.component';
import { ListComponent } from 'src/app/module/list/list.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
  DefaultComponent,
  DashboardComponent,
  ProfileComponent,
  ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatChipsModule
  ]
})
export class DefaultModule { }
