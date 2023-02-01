import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private AuthSer : AuthService, private router : Router, private ngZone : NgZone) { }

  ngOnInit(): void {
  }

  GOOGLE():void{
    this.AuthSer.doGoogleLogin().then(()=>{
      this.succesRedirect()
      this.router.navigate(['/members'])
    })
  }

  succesRedirect():void{
    this.ngZone.run(()=>{this.router.navigate(['/members'])})
  }

}
