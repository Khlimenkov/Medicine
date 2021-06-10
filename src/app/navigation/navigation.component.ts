import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent  implements OnInit{
  constructor(private authService: AuthService,
    private router: Router,){}
    ngOnInit(){
     
    }
    logout(){
    this.authService.logout();
    this.router.navigate(['login']);
   }
    isLoggedIn (){
     if(this.authService.isLoggedIn()){
       return true
     } else return false;
   }
     
  

   
   showFiller = false;

}
