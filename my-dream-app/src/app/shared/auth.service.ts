import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  sudahLogin(): boolean {
        return localStorage.getItem("userInfo") != null 
            && localStorage.getItem("token") != null;
    }

    login(username: string, password: string): boolean {
        if("admin"==username && "12345"==password){
            let userInfo ={
                fullname : "kelompok6",
                username : "admin"
            };
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
            localStorage.setItem("token","abcde12345");
            return true;
         }
        return false;
    }

    logout(): void {
        localStorage.removeItem("userInfo");
        localStorage.removeItem("token");
    }
    
    getUserInfo(){
        return JSON.parse(localStorage.getItem("userInfo"));
    }
}


