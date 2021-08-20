import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./shared/auth-guard.service";

const routes: Routes = [
    {path: "", component: AuthComponent},
    {path: "home", canActivate: [AuthGuard], loadChildren: () =>import('./sidenav/sidenav-routing.module').then(m => m.SidenavRouting)}  
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule{

}