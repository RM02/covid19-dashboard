import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  routes:any = [{
  	name: 'Dashboard',
  	path: 'dashboard'
  },
  {
    name: 'Records',
    path: 'records'
  }
 // {
  //	name: 'Profile',
  //	path: 'profile'
 // }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(newRoute) {
    if (newRoute == 'dashboard') {
      this.router.navigate([''])
    } else {
        this.router.navigate([newRoute])
    }
  }

}
