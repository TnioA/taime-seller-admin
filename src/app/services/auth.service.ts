import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isUserAuthenticated: boolean = false;
  public showMenu = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  tryLogin(user: User){
    if(user.email === 'teste@email.com' && user.password === '123'){
      this.isUserAuthenticated = true;
      this.showMenu.emit(true);
      this.router.navigate(['/']);
    }else{
      this.isUserAuthenticated = false;
      this.showMenu.emit(false);
    }
  }
}
