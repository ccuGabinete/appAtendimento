import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/usuarios/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private usuario: Usuario){

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
