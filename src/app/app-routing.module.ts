import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";

const routes: Routes = [
    {path: "", component: AuthComponent},
    {path: "home", loadChildren: () =>import('./sidenav/sidenav-routing.module').then(m => m.SidenavRouting)}  
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule{

}