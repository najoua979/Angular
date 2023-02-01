import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/AuthService';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor( private AuthService : AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  logout():void{
    this.AuthService.doLogout().finally(()=>{this.router.navigate(['/login'])})
  }

}
