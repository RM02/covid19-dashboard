import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { ProfileComponent } from './module/profile/profile.component';
import { ListComponent } from './module/list/list.component';

const routes: Routes = [
	{
		path: '',
		component: DefaultComponent,
		children:[
			{
				path: '',
				component: DashboardComponent
			},
			{
				path: 'records',
				component: ListComponent
			},
			{
				path: 'profile',
				component: ProfileComponent
			}]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
