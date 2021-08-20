import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { User } from "./user.model";

export interface AuthResponseData{
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered? : boolean
}
@Injectable({providedIn: 'root'})
export class DataStorageService {
    public user:BehaviorSubject<User> = new BehaviorSubject<User>(<any>null);

    constructor(private http: HttpClient){}

    signup(email: string, firstName: string, lastName: string, password: string){
        return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBXCQV6L_ZeOuSA9g8TesCKa0eLGJk0aGA", {
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password,
            returnSecureToken: true
        }).pipe(catchError(this.handleError), tap(resData => {
            this.handleAuthentication(resData.email, resData.idToken, resData.localId, +resData.expiresIn);
        }))
    }

    login(email: string, password: string){
        return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBXCQV6L_ZeOuSA9g8TesCKa0eLGJk0aGA", {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(catchError(this.handleError), tap(resData => {
            this.handleAuthentication(resData.email, resData.idToken, resData.localId, +resData.expiresIn);
        }))
    }

    private handleAuthentication(email: string, userId: string, token: string, expiresIn: number){
        const expirationDate = new Date(new Date().getTime() + expiresIn*1000);
        const user = new User(email, userId, token, expirationDate);
        if(user){
            this.user.next(user);
            console.log(this.user);
            localStorage.setItem("userData", JSON.stringify(user));
        }
    }

    private handleError(errorRes: HttpErrorResponse){
        let errorMessage = "an unknown error occurred";

        if(!errorRes.error || !errorRes.error.error){
            throwError(errorMessage);
        }

        switch (errorRes.error.error.message){
            case "EMAIL_EXISTS":
                errorMessage = "email already exists";
                break;
            case "EMAIL_NOT_FOUND":
                errorMessage = "This email doesn't exists";
                break;
            case "INVALID_PASSWORD":
                errorMessage = "password is incorrect";
                break;
        }
        return throwError(errorMessage);
    }

    autolLogin(){
        const userData = localStorage.getItem('userData');
        if(!userData){
            return;
        }
        const user: {
            email: string;
            id: string;
            _token: string;
            _tokenExpirationDate: string
        }  = JSON.parse(userData);
        const loadedUser = new User(user.email, user.id, user._token, new Date(user._tokenExpirationDate));
        if(loadedUser.token){
            this.user.next(loadedUser);
        }
        
    }
}