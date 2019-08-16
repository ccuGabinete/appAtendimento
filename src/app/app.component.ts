import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import {ApiService} from './services/api.service';
import { Usuario } from './usuarios/usuario';
 
const minutos = 1
const segundos = 18
const milissegundos = 1000
const time = (minutos*segundos*milissegundos)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy{

  AppComponent(){

  }

 
  usuario: Usuario;

  enviar(){
    console.log("ok");
  }
  
  ngOnInit(): void {
   this.usuario = new Usuario();
  }  
  
  ngOnDestroy(): void {
   console.log("ok");
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.usuario);
  }

  
}
  
