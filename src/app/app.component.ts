import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import {ApiService} from './services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy{

  constructor(private router: Router){

  }
   
  ngOnInit(): void {
   
  }  
  
  ngOnDestroy(): void {
   console.log("onDestroy");
  }

 

  
}
  
