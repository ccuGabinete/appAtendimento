import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.css']
})
export class AtendimentoComponent implements OnInit, OnDestroy {
 

  constructor(private router: Router){

  }
     
  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngOnDestroy(): void {
   console.log("ngOnDestroy");
  }
  
  
}
