import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { MaterialModule } from "../shared/material.modules";
import { SidenavDetailsComponent } from "./sidenav-details/sidenav-details.component";
import { SidenavTemplateComponent } from "./sidenav-details/sidenav-template/sidenav-template.component";
import { SidenavComponent } from "./sidenav.component";
import { StarredComponent } from "./starred/starred.component";
import { ComposeDialogComponent } from './compose-dialog/compose-dialog.component';
import { Ng2SearchPipeModule } from "ng2-search-filter";

@NgModule({
    declarations: [
        SidenavDetailsComponent,
        SidenavTemplateComponent,
        SidenavComponent,
        StarredComponent,
        ComposeDialogComponent,
    ],
    // entryComponents: [ComposeDialogComponent],

    imports: [CommonModule, ReactiveFormsModule,MaterialModule,AppRoutingModule, Ng2SearchPipeModule]

})
export class sidenavModule{

    constructor(private router: Router){}

    onLogout(){
        this.router.navigateByUrl('/');
    }

}