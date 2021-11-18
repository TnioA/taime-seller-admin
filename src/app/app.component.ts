import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TaimeUi';

  public isUserAutenticated: boolean = false;

  constructor(private router: Router, private authService: AuthService){
  }

  ngOnInit(): void {
    // this.authService.showMenu.subscribe(x=> {
    //   this.isUserAutenticated = x;
    // });
    
    // if(!this.authService.isUserAuthenticated)
    //   this.router.navigate(['/login']);
  }
}
