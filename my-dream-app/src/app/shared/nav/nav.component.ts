import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  appName = 'Coba NG';
  constructor(private auth : AuthService) { }

  ngOnInit() {
  }
    logout():void{
        this.auth.logout();
    }
}
