import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  loading: boolean = true;
  value: number = 50;

  constructor() { }

  ngOnInit(): void {
  	setTimeout(() => {
      this.loading = false
    }, 1000);
  }

}
