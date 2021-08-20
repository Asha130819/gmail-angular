import { Injectable} from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthResponseData, DataStorageService } from "./data-storage.service";
import { User } from "./user.model";


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{
    user!: User;

    constructor(private dataStorage: DataStorageService, private router: Router){}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> |  boolean {
         const user = this.dataStorage.user.subscribe(user => {
            this.user = user;
        });
        if(this.user){
            return true;
        } else{
            return this.router.navigate(['/']);
        }
        
    }
}