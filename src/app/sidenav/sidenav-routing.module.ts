import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SidenavDetailsComponent } from "./sidenav-details/sidenav-details.component";
import { SidenavTemplateComponent } from "./sidenav-details/sidenav-template/sidenav-template.component";
import { SidenavComponent } from "./sidenav.component";
import { StarredComponent } from "./starred/starred.component";

const sidenavRoutes: Routes = [
    {path: "", component: SidenavComponent, children: [
        {path: "", component: SidenavDetailsComponent},
        {path: ":name/re", component: StarredComponent},
        {path: ":id", component: SidenavTemplateComponent}
    ]},
];
@NgModule({
    imports: [RouterModule.forChild(sidenavRoutes)],
    exports: [
        RouterModule
    ]
})
export class SidenavRouting {}