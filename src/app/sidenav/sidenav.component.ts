import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { SidenavService } from './sidenav.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit{
  myControl!: FormControl;
  userEmail!: string;
  mail!: string;

  constructor(private dataStorage: DataStorageService,public dialog: MatDialog, private sidenav: SidenavService){}

  compose = false;

    ngOnInit(){
        this.myControl = new FormControl(null);
        this.dataStorage.user.subscribe(user=> {
          if(user){
            console.log(user);
            this.mail = user.email;
            console.log(this.mail);
          }
          
        })
    }

  openCompose(){
    this.compose=!this.compose;
  }
  

  checkKey(event: any){
    this.sidenav.getKey(event.target.value);
  }
}
