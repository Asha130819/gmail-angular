import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavComponent } from '../sidenav.component';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-sidenav-details',
  templateUrl: './sidenav-details.component.html',
  styleUrls: ['./sidenav-details.component.css']
})
export class SidenavDetailsComponent implements OnInit {
  primary = this.sidenavService.primary;
  social = this.sidenavService.social;
  promotion = this.sidenavService.promotion;
  filterTerm!: string;
  filterCheck = this.sidenav.key.subscribe(data => {
    this.filterTerm = data;
    console.log(this.filterTerm);
  })

  constructor(
    private sidenavService: SidenavService,
    private router: Router,
    private sidenavComponent: SidenavComponent,
    private sidenav: SidenavService
  ) {}

  ngOnInit(): void {
  }

  getTime(time: string){
    const hourTime: number = new Date(time).getHours();
    const minTime: number = new Date(time).getMinutes();
    var ampm = hourTime >= 12 ? ' AM' : ' PM';
    return hourTime + ":" + minTime + ampm;
  }
  
}
