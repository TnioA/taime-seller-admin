import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private userAutenticated: boolean = false;
  public user: User = new User();

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  tryLogin(){
    this.authService.tryLogin(this.user);
  }

}
